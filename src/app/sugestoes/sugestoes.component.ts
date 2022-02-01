import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { catchError, map, Observable, of, filter, debounceTime, distinctUntilChanged, tap, fromEvent } from 'rxjs';

import { Sugestoes } from '../modelosInterface/sugestoes';
import { AutenticacaoFirebaseService } from '../servicosInterface/autenticacao-firebase.service';
import { SugestoesService } from './../servicosInterface/sugestoes.service';

@Component({
  selector: 'app-sugestoes',
  templateUrl: './sugestoes.component.html',
  styleUrls: ['./sugestoes.component.scss']
})
export class SugestoesComponent implements OnInit, AfterViewInit {

  resultado$!: Observable<Sugestoes | undefined>
  listaLivrosSugestoes$: Observable<Sugestoes[]>

  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  listaLivrosSugestoes = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.listaLivrosSugestoes$;
      }
      return this.listaLivrosSugestoes$;
    })
  );

  @ViewChild('searchInput') searchInput!: ElementRef;

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

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(400),
        distinctUntilChanged(),
        tap(() => {
          const query = this.searchInput.nativeElement.value;
          if (query) {
            this.resultado$ = this.sugestoesService.pesquisarSugestoes(query);
          }
        })
      )
      .subscribe(console.log);
  }

}
