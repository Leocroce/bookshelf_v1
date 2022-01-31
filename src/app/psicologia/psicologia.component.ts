import { PsicologiaService } from './../servicosInterface/psicologia.service';

import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { Psicologia } from './../modelosInterface/psicologia';
import { Observable, catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-psicologia',
  templateUrl: './psicologia.component.html',
  styleUrls: ['./psicologia.component.scss']
})
export class PsicologiaComponent implements OnInit {

  //***Variáveis
  dadosPsicologia$: Observable<Psicologia[]>;
  visaoColunas=['titulo','autor','img'];

  //***Construtor
  constructor(
    private servicoPsicologia: PsicologiaService,
    private rota: Router
  ) {
    this.dadosPsicologia$ = servicoPsicologia.listarPsicologia()
    .pipe(
      catchError(error =>{
        return of([])
      })
    )
  }

  ngOnInit(): void {
  }

}
