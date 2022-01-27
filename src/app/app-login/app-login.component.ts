import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';

import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.scss']
})
export class AppLoginComponent {
  formularioLogin = this.loginBuilder.group({
    email: new FormControl('',[Validators.required, Validators.email]),
    senha: new FormControl('', Validators.required)
  });

  tentativa: number = 0;
  captcha!:string

  hasUnitNumber=false;

  constructor(
    private loginBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public conteudo:string,
    private telaLogin: MatDialog,
    private toast: HotToastService,
    private rotas: Router,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
    ) {}

    get email(){
      return this.formularioLogin.get('email')
    }

    get senha(){
      return this.formularioLogin.get('senha')
    }
    loginFirebase(){
      if(!this.formularioLogin.valid){
        this.tentativa ++
        this.captcha = ''
        console.log(this.tentativa)
        return;
      }
      const {email, senha} = this.formularioLogin.value;
      this.autenticacaoFirebaseService.loginUsuario(email, senha)
      .pipe(
        this.toast.observe({
          success: 'Login valido, obrigado',
          loading: 'Redirecionando...',
          error: 'Algo deu errado, confira as informações'
        })
      ).subscribe(()=>{
        this.tentativa = 0
        this.rotas.navigate(['/cdd'])
        this.telaLogin.closeAll();
        console.log(this.tentativa)
      })
  }
  resolveRecaptcha(response : string){
    this.captcha = response;
    this.tentativa = 0;
    console.log('Resolve Recaptcha', response);
  }
}
