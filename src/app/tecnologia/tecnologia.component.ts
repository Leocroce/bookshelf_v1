import { TecnologiaService } from './../servicosInterface/tecnologia.service';

import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { Tecnologia } from './../modelosInterface/tecnologia';
import { Observable, catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.scss']
})
export class TecnologiaComponent implements OnInit {

  //***Variáveis
  Tecnologia$: Observable<Tecnologia[]>;
  visaoColunas=['titulo','autor','sinopse','img'];

  //***Construtor
  constructor(
    private servicoTecnologia: TecnologiaService,
    private rota: Router
  ) {
    this.Tecnologia$ = servicoTecnologia.listarTecnologia()
    .pipe(
      catchError(error =>{
        return of([])
      })
    )
  }

  ngOnInit(): void {
  }
}