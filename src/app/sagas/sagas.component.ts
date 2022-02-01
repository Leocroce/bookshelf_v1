import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicoDadosService } from './../servicosInterface/servico-dados.service';
import { SagasService } from './../servicosInterface/sagas.service';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';
import { Observable, catchError, of, first, tap, fromEvent } from 'rxjs';
import { Sagas } from './../modelosInterface/sagas';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sagas',
  templateUrl: './sagas.component.html',
  styleUrls: ['./sagas.component.scss']
})
export class SagasComponent implements OnInit {

  //***Variáveis
  cardsSagas$!: Observable<Sagas[]>;
  resultado$!: Observable<Sagas | undefined>;

  usuario$= this.autenticacaoFirebaseService.usuarioLogado$;

  @ViewChild('buscarInput') buscarInput!: ElementRef;



  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsSagas$;
      }
      return this.cardsSagas$;
    })
  );

  //***Construtor
  constructor(
    private breakpointObserver: BreakpointObserver,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private sagasService: SagasService,
    private rota: Router
      ) {
    this.cardsSagas$ = sagasService.listagemCardsSagas()
    .pipe(
      catchError(() =>{
        return of([])
      })
    )
  }

  irParaDetalhes(id: number, saga: Sagas){
    console.log(id,saga)
    //this.servicoDadosService.setSaga(saga);
    this.rota.navigateByUrl('/saga', {
      state:saga
    })
  }

  ngAfterViewInit(): void {
    fromEvent(this.buscarInput.nativeElement, 'keyup').pipe(
      filter(Boolean), // Eliminar arquivos nulos, vazios valores falses (falsy value (0, vazio, undefined, null))
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => {
       const busca = this.buscarInput.nativeElement.value;
       if (busca) {
        this.resultado$ = this.sagasService.buscar(busca);
       } else {
        this.resultado$ = this.resultado$ ;
       }
      })
    )
    .subscribe();
  }

  ngOnInit(): void {

  }

}
