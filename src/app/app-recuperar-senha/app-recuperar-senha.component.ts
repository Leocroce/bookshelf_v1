import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-app-recuperar-senha',
  templateUrl: './app-recuperar-senha.component.html',
  styleUrls: ['./app-recuperar-senha.component.scss']
})
export class AppRecuperarSenhaComponent implements OnInit {

  formularioRecuperarSenha = this.loginBuilder.group({
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  constructor(
    private loginBuilder: FormBuilder,
  ) { }

  get email() {
    return this.formularioRecuperarSenha.get('email');
  }

  ngOnInit(): void {
  }

}
