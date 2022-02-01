import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, OnInit, Inject } from '@angular/core';
import { CriticasService } from '../../service/criticas.service';
import { Observable, tap } from 'rxjs';
import { Criticas } from '../../modelos/criticas';

@Component({
  selector: 'app-criticas-dialogo',
  templateUrl: './criticas-dialogo.component.html',
  styleUrls: ['./criticas-dialogo.component.scss']
})
export class CriticasDialogoComponent implements OnInit {

  cardsCriticas$: Observable<Criticas | undefined>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public conteudo: string,
    private criticasService: CriticasService,
  ) {
    this.cardsCriticas$ = this.criticasService.listarCritica(conteudo)
    .pipe(
      tap(cardCritica => console.log(cardCritica))
    );
  }

  ngOnInit(): void {
  }
}
