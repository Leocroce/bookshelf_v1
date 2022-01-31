import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Criticas } from '../modelos/criticas';

@Injectable({
  providedIn: 'root'
})
export class CriticasService {

  private readonly urlAPI = '/src/assets/criticas.json'

  constructor(private criticas: HttpClient) { }

  listagemCriticas() {
    return this.criticas.get<Criticas[]>(this.urlAPI)
    .pipe(
      first(),
      tap(apiCriticas => console.log(apiCriticas))
    )
  }
}
