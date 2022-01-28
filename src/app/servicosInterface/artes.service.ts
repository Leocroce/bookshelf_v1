import { Artes } from './../modelosInterface/artes';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtesService {
  private readonly uriAPI = '../../assets/artes.json';

  constructor(private importantesLivrosArtes: HttpClient) { }

  listagemCards() {
    return this.importantesLivrosArtes.get<Artes[]>(this.uriAPI)
      .pipe(
        first(),
        tap(apiArtes => console.log(apiArtes))
      )
  }
}
