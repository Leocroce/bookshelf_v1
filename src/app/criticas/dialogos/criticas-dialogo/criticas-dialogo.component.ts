import { AppDialogosComponent } from './../../../app-compartilhado/app-dialogos/app-dialogos.component';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { CriticasService } from '../../service/criticas.service';
import { catchError, Observable, of } from 'rxjs';
import { Criticas } from '../../modelos/criticas';

@Component({
  selector: 'app-criticas-dialogo',
  templateUrl: './criticas-dialogo.component.html',
  styleUrls: ['./criticas-dialogo.component.scss']
})
export class CriticasDialogoComponent implements OnInit {

  cardsCriticas$: Observable<Criticas[]>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public conteudo: string,
    private telaCriticas: MatDialog,
    private criticasService: CriticasService,
    private dialogo: MatDialog,
  ) {
    this.cardsCriticas$ = criticasService.listagemCriticas()
    .pipe(
      catchError(error => {
        this.abrirDialogoErro("Erro ao carregar as críticas literárias: #BS -"+error.status)
        return of([])
      })
    );
  }

  abrirDialogoErro(erroMsg: string){
    this.dialogo.open(AppDialogosComponent,{
      data: erroMsg
    })
  }

  ngOnInit(): void {
  }

}
