import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { EspecialMesService } from './../servicosInterface/especial-mes.service';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { EspecialMes } from '../modelosInterface/especialMes';

@Component({
  selector: 'app-especial-mes',
  templateUrl: './especial-mes.component.html',
  styleUrls: ['./especial-mes.component.scss']
})
export class EspecialMesComponent implements OnInit {
  month: string[] = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];
  d = new Date();
  name = this.month[this.d.getMonth()];

  noticias$: Observable<EspecialMes[]>
  noticiasCards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.noticias$;
      }
      return this.noticias$;
    })
  );

  constructor(
    private especialMesService: EspecialMesService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.noticias$ = especialMesService.listagemNoticias()
    .pipe(
      catchError(error => {
        return of([])
      })
    )
  }

  ngOnInit(): void {
  }

}
