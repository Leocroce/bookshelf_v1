import { first, tap, delay, map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sagas } from '../modelosInterface/sagas';

@Injectable({
  providedIn: 'root',
})
export class SagasService {
  // Declarando variável que receberá o caminho da API
  private readonly uriAPI = '../../assets/sagas.json';

  constructor(
    //Construindo http para uso de seu métodos
    private cardsSagas: HttpClient
  ) {}

  // Método para requisitar as sagas
  listagemCardsSagas() {
    return this.cardsSagas.get<Sagas[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiSagas => apiSagas)
    )
  }

  buscar(busca: string){
    return this.cardsSagas.get<Sagas[]>(this.uriAPI)
    .pipe(
      map((data) => data.find(b => (b.titulo.toLocaleLowerCase()).startsWith(busca.toLocaleLowerCase())))
    )
  }

}
