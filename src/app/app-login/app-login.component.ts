import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { error } from 'console';
import { timeout } from 'rxjs';

import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss'],
})
export class AppLoginComponent {
  formularioLogin = this.loginBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
  });

  tentativa: number = 0;
  captcha!: string;

  hasUnitNumber = false;

  constructor(
    private loginBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public conteudo: string,
    private telaLogin: MatDialog,
    private toast: HotToastService,
    private rotas: Router,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) {}

  get email() {
    return this.formularioLogin.get('email');
  }

  get senha() {
    return this.formularioLogin.get('senha');
  }
  loginFirebase() {
    if (!this.formularioLogin.valid) {
      this.tentativa++;
      this.captcha = '';
      return;
    }
    const { email, senha } = this.formularioLogin.value;
    this.autenticacaoFirebaseService
      .loginUsuario(email, senha)
      .subscribe({
        next: () => {
          this.formularioLogin.reset({ email: '', senha: '' });
          this.rotas.navigate(['/cdd']);
          this.telaLogin.closeAll();
          this.toast.loading('Redirecionando...', {
            duration: 2000
          }),
          this.toast.success('Login válido, obrigado')
        },
        error: (erro) => {
          let mensagem = 'Message error';
          switch (erro.code) {
            case 'auth/user-not-found':
              mensagem = `${erro.code}: Usuário não encontrado`;
              break;
            case 'auth/wrong-password':
              mensagem = `${erro.code}: Senha incorreta!`;
              break;
            case 'auth/too-many-requests':
              mensagem = `${erro.code}: Realizadas várias tentativas de acesso, usuário temporariamente bloqueado!`;
              break;
          }
          this.toast.error(mensagem);
        },
      });
    setTimeout(() => {
      this.tentativa++;
      this.captcha = '';
    }, 800);
  }
  resolveRecaptcha(resposta: string) {
    this.captcha = resposta;
    this.tentativa = 0;
  }
}
