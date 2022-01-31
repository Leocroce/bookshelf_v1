import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empreendedorismo } from '../modelosInterface/empreendedorismo';

@Injectable({
  providedIn: 'root'
})
export class EmpreendedorismoService {

  private readonly uriAPI = '../../assets/empreendedorismo.json';

  constructor(private cardsEmpreendedorismo: HttpClient) { }

  listagemCardsEmpreendedorismo() {
    return this.cardsEmpreendedorismo.get<Empreendedorismo>(this.uriAPI)
    .pipe(
      first(),
      tap(apiEmpreendedorismo => console.log(apiEmpreendedorismo))
    )
  }
}
