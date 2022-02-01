import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap, map } from 'rxjs';

import { Sugestoes } from './../modelosInterface/sugestoes';

@Injectable({
  providedIn: 'root'
})
export class SugestoesService {
  private readonly uriAPI = '../../assets/sugestoes.json'

  constructor(
    private cartaosugestoes: HttpClient
  ) { }

  cartoesSugestoes() {
    return this.cartaosugestoes.get<Sugestoes[]>(this.uriAPI).pipe(
      first(),
      tap(apiSugestoes => console.log(apiSugestoes))
    )
  }

  pesquisarSugestoes(query: string) {
    return this.cartaosugestoes.get<Sugestoes[]>(this.uriAPI).pipe(
      map((resp) => resp.find(g => (g.titulo.toLowerCase()).startsWith(query.toLowerCase())))
    )
  }

}
