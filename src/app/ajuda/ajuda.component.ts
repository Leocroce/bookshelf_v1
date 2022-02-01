import { AppLoginComponent } from './../app-login/app-login.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ajuda',
  templateUrl: './ajuda.component.html',
  styleUrls: ['./ajuda.component.scss']
})
export class AjudaComponent implements OnInit {

  constructor(
    private telaLogin: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  abrirLogin(erroMsg: string){
    this.telaLogin.open(AppLoginComponent,{
      data: erroMsg
    })
  }

}
