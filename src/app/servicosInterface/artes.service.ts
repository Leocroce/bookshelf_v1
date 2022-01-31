import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Artes } from './../modelosInterface/artes';


@Injectable({
  providedIn: 'root'
})
export class ArtesService {
  private readonly uriAPI = '../../assets/artes.json';

  constructor(private listaLivrosArtes: HttpClient) { }

  listagemTabelaArtes() {
    return this.listaLivrosArtes.get<Artes[]>(this.uriAPI)
      .pipe(
        first(),
        tap(apiArtes => console.log(apiArtes))
      )
  }
}
