import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

import { Sugestoes } from '../modelosInterface/sugestoes';
import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';
import { SugestoesService } from './../servicosInterface/sugestoes.service';

@Component({
  selector: 'app-sugestoes',
  templateUrl: './sugestoes.component.html',
  styleUrls: ['./sugestoes.component.scss']
})
export class SugestoesComponent implements OnInit {

  listaLivrosSugestoes$: Observable<Sugestoes[]>;

  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  listaLivrosSugestoes = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.listaLivrosSugestoes$;
      }
      return this.listaLivrosSugestoes$;
    })
  );


  constructor(
    private breakpointObserver: BreakpointObserver,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private sugestoesService: SugestoesService
  ) {
    this.listaLivrosSugestoes$ = sugestoesService.cartoesSugestoes().pipe(
      catchError(error => {
        return of([])
      })
    )
  }

  ngOnInit(): void {
  }

}
