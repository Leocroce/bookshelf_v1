import { Router } from '@angular/router';
import { ServicoDadosService } from './../servicosInterface/servico-dados.service';
import { SagasService } from './../servicosInterface/sagas.service';
import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { Observable, catchError, of } from 'rxjs';
import { Sagas } from './../modelosInterface/sagas';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sagas',
  templateUrl: './sagas.component.html',
  styleUrls: ['./sagas.component.scss']
})
export class SagasComponent implements OnInit {

  //***Variáveis
  cardsSagas$!: Observable<Sagas[]>;
  usuario$= this.autenticacaoFirebaseService.usuarioLogado$;
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
    private servicoDadosService: ServicoDadosService,
    private rota: Router
      ) {
    this.cardsSagas$ = sagasService.listagemCardsSagas()
    .pipe(
      catchError(error =>{
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

  ngOnInit(): void {
  }

}
