import { Router } from '@angular/router';
import { ServicoDadosService } from './../servicosInterface/servico-dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalhe-saga',
  templateUrl: './detalhe-saga.component.html',
  styleUrls: ['./detalhe-saga.component.scss']
})
export class DetalheSagaComponent implements OnInit {

  saga!: any;

  constructor(
    private servicoDadosService: ServicoDadosService,
    private rota: Router
  ) {
    const navegacao = this.rota.getCurrentNavigation();
    this.saga = navegacao?.extras.state;
    console.log(this.saga)
  }

  ngOnInit(): void {

  }

}
