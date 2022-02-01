
import { TeatroService } from './../servicosInterface/teatro.service';

import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { Teatro } from './../modelosInterface/teatro';
import { Observable, catchError, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teatro',
  templateUrl: './teatro.component.html',
  styleUrls: ['./teatro.component.scss']
})
export class TeatroComponent implements OnInit {

  //***Variáveis
  Teatro$: Observable<Teatro[]>;
  visaoColunas=['titulo','autor','img'];

  //***Construtor
  constructor(
    private servicoTeatro: TeatroService,
    private rota: Router
  ) {
    this.Teatro$ = servicoTeatro.listarTeatro()
    .pipe(
      catchError(error =>{
        return of([])
      })
    )
  }

  ngOnInit(): void {
  }

}
