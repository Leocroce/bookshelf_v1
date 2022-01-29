import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

export function passwordMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const senha = control.get('senha')?.value;
    const confirma = control.get('confirmaSenha')?.value;

    if (senha && confirma && senha !== confirma) {
      return {
        senhaConfirmada: true
      }
    }
    return null;
  }
}

@Component({
  selector: 'app-app-cadastro',
  templateUrl: './app-cadastro.component.html',
  styleUrls: ['./app-cadastro.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class AppCadastroComponent implements OnInit {

  formularioCadastro = this.loginBuilder.group({
    nome: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required),
    confirmaSenha: new FormControl('', Validators.required),
  }, { validators: passwordMatchValidator() });

  constructor(
    private loginBuilder: FormBuilder,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private toast: HotToastService,
    private rotas: Router,
  ) { }

  get nome() {
    return this.formularioCadastro.get('nome')
  }

  get email() {
    return this.formularioCadastro.get('email')
  }

  get senha() {
    return this.formularioCadastro.get('senha')
  }

  get confirmaSenha() {
    return this.formularioCadastro.get('confirmaSenha')
  }

  enviaCadastro() {
    alert(`Vamos que vamos`);
    if (!this.formularioCadastro.valid) {
      return;
    }
    const { nome, email, senha } = this.formularioCadastro.value;
    this.autenticacaoFirebaseService
      .cadastrarUsuario(nome, email, senha)
      .subscribe({
        next: () => {
          this.toast.loading('Enviando informações......', {
            duration: 3000
          })
          this.toast.success('Cadatro executado, bem vindo ao BookShelf'),
          this.rotas.navigate(['/feed'])
        },
        error: (erro) => {
          let mensagem = 'Message error';
          switch (erro.code) {
            case 'auth/email-already-in-use':
              mensagem = `${erro.code}: Usuário já existe favor informar outro email`;
              break;
              case 'auth/weak-password':
              mensagem = `${erro.code}: A senha deve ter pelo menos 6 characters `;
              break;
          }
          this.toast.error(mensagem);
        },
      },
      );
  }
  ngOnInit(): void {
  }
}
