import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { MatDialog } from '@angular/material/dialog';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable, of, tap } from 'rxjs';
import { Criticas } from '../modelos/criticas';
import { CriticasService } from './../service/criticas.service';
import { CriticasDialogoComponent } from '../dialogos/criticas-dialogo/criticas-dialogo.component';

@Component({
  selector: 'app-criticas',
  templateUrl: './criticas.component.html',
  styleUrls: ['./criticas.component.scss']
})
export class CriticasComponent implements OnInit {

  resultado$!: Observable<Criticas | undefined>
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

  @ViewChild('searchInput') searchInput!: ElementRef;

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

  ngAfterViewInit(): void {
    fromEvent(this.searchInput.nativeElement, 'keyup')
      .pipe(
        filter(Boolean),
        debounceTime(400),
        distinctUntilChanged(),
        tap(() => {
          const query = this.searchInput.nativeElement.value;
          if (query) {
            this.resultado$ = this.criticasService.pesquisar(query);
          }
        })
      )
      .subscribe(console.log);
  }
  }

