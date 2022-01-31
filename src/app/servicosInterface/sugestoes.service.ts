import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

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

}
