import { Component, OnInit } from '@angular/core';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit {
  usuario$= this.autenticacaoFirebaseService.usuarioLogado$;

  constructor(
    private autenticacaoFirebaseService: AutenticacaoFirebaseService
  ) { }

  ngOnInit(): void {
  }

}
