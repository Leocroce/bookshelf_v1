import { MaisVendidos} from '../modelosInterface/maisVendidos';
import { MaisVendidosService } from '../servicosInterface/maisVendidos.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { catchError, Observable, of } from 'rxjs';
import { AppDialogosComponent } from '../app-compartilhado/app-dialogos/app-dialogos.component';

@Component({
  selector: 'app-mais-vendidos',
  templateUrl: './mais-vendidos.component.html',
  styleUrls: ['./mais-vendidos.component.scss']
})
export class MaisVendidosComponent implements OnInit {

  maisVendidosBrasil$: Observable <MaisVendidos[]>;
  maisVendidosInternacional$: Observable <MaisVendidos[]>;
  visaoColunas=['idMaisVendidos', 'tituloMaisVendidos', 'autorMaisVendidos', 'resumoMaisVendidos', 'imgMaisVendidos'];

  constructor(
    private maisVendidosService: MaisVendidosService,
    public dialog: MatDialog
  ) {
    this.maisVendidosBrasil$ = maisVendidosService.listarMaisVendidosBrasil()
    .pipe(
      catchError(() =>{
        return of([])
      }));
      this.maisVendidosInternacional$ = maisVendidosService.listarMaisVendidosInternacional()
    .pipe(
      catchError(() =>{
        return of([])
      }));
   }
  abrirDialogoErro(arg0: string) {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
