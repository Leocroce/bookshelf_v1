import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Criticas } from '../modelos/criticas';
import { CriticasService } from './../service/criticas.service';
import { CriticasDialogoComponent } from '../dialogos/criticas-dialogo/criticas-dialogo.component';

@Component({
  selector: 'app-criticas',
  templateUrl: './criticas.component.html',
  styleUrls: ['./criticas.component.scss']
})
export class CriticasComponent implements OnInit {

  cardsCriticas$: Observable<Criticas[]>;
  cardsCriticas = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsCriticas$;
      }
      return this.cardsCriticas$;
    })
  );

  constructor(
    private criticasService: CriticasService,
    private dialogo: MatDialog,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.cardsCriticas$ = criticasService.listagemCriticas()
    .pipe(
      catchError(error => {
        return of([])
      })
    );
  }

  abrirDialogoCriticas(titulo: string){
    this.dialogo.open(CriticasDialogoComponent,{
      data: titulo
    })
  }
  ngOnInit(): void {
  }

}
