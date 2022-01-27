import { Observable, catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { MenuNavegador } from '../modelosInterface/menuNavegador';
import { NavegacaoService } from '../servicosInterface/navegacao.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario$= this.autenticacaoFirebaseService.usuarioLogado$;
  itensPerfil$!: Observable<MenuNavegador[]>

  constructor(
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private navegadorService: NavegacaoService
  ) {
    this.itensPerfil$ = navegadorService.listagemMenu().pipe(
      catchError(error =>{
        return of([])
      })
    );
    console.log(this.itensPerfil$);
  }

  ngOnInit(): void {
  }

}
