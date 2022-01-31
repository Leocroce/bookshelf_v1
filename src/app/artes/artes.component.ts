import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';
import { Artes } from './../modelosInterface/artes';
import { ArtesService } from './../servicosInterface/artes.service';

@Component({
  selector: 'app-artes',
  templateUrl: './artes.component.html',
  styleUrls: ['./artes.component.scss']
})
export class ArtesComponent implements OnInit {

  listaLivrosArte$: Observable<Artes[]>;
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  listaLivrosArte = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.listaLivrosArte$;
      }
      return this.listaLivrosArte$;
    })
  );
  visaoColunas = ['id', 'titulo', 'autor', 'sinopse', 'img'];


  constructor(
    private breakpointObserver: BreakpointObserver,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private artesService: ArtesService,
  ) {
    this.listaLivrosArte$ = artesService.listagemTabelaArtes()
      .pipe(
        catchError(error => {
          return of([])
        })
      )
  }

  ngOnInit(): void {
  }

}
