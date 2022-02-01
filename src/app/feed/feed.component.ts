import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, debounceTime, distinctUntilChanged, filter, fromEvent, Observable, of, tap } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppDialogosComponent } from '../app-compartilhado/app-dialogos/app-dialogos.component';
import { Dashboard } from './../modelosInterface/dashboard';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { DashboardService } from './../servicosInterface/dashboard.service';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent {
  resultado$!: Observable<Dashboard | undefined>;
  cards$: Observable<Dashboard[]>;
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$;
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cards$;
      }
      return this.cards$;
    })
  );


  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private dashboardService: DashboardService,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    public dialogo: MatDialog
  ) {
    this.cards$ = dashboardService.listagemCards()
      .pipe(
        catchError(error => {
          this.abrirDialogoErro("Erro ao carregar o feed: #BS -" + error.status)
          return of([])
        })
      )
  }

  abrirDialogoErro(erroMsg: string) {
    this.dialogo.open(AppDialogosComponent, {
      data: erroMsg
    })
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
            this.resultado$ = this.dashboardService.pesquisarFeed(query);
          }
        })
      )
      .subscribe(console.log);
  }

}
