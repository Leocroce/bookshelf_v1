import { Observable } from 'rxjs';
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
  itensMenu$!: Observable<MenuNavegador[]>

  constructor(
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private navegadorService: NavegacaoService
  ) {
    this.itensMenu$ = navegadorService.listagemMenu();
  }

  ngOnInit(): void {
  }

}
