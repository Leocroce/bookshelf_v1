import { Direito } from './../modelosInterface/direito';
import { DireitoService } from '../servicosInterface/direito.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { AppDialogosComponent } from '../app-compartilhado/app-dialogos/app-dialogos.component';

@Component({
  selector: 'app-direito',
  templateUrl: './direito.component.html',
  styleUrls: ['./direito.component.scss']
})
export class DireitoComponent implements OnInit {

  direito$: Observable <Direito[]>;
  visaoColunas=['idDireito', 'nomeDireito', 'nomeAutor', 'imgDireito'];

  constructor(
    private direitoService: DireitoService,
    public dialogo: MatDialog
    ) {
    this.direito$ = direitoService.listagemDireito()
    .pipe(
      catchError(error =>{
        this.abrirDialogoErro("Erro ao carregar a tabela: #BS -"+error.status)
        return of([])
      })
    );
   }
  abrirDialogoErro(arg0: string) {
    throw new Error('Method not implemented.');
  }


  ngOnInit(): void {
  }

}
