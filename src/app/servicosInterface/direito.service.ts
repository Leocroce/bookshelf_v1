import { Direito } from '../modelosInterface/direito';
import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sagas } from '../modelosInterface/sagas';

@Injectable({
  providedIn: 'root',
})
export class DireitoService {
  private readonly uriAPI = '../../assets/direito.json';

  constructor(
    private Direito: HttpClient
  ) {}

  listagemDireito() {
    return this.Direito.get<Direito[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiDireito => apiDireito)
    )
  }
}
