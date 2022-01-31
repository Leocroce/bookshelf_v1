import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Tecnologia } from './../modelosInterface/tecnologia';

@Injectable({
  providedIn: 'root'
})
export class TecnologiaService {

  private readonly urlAPI = '../../assets/tecnologia.json';

  constructor(
    private httpTecnologia: HttpClient
    ) { }

  listarTecnologia() {
    return this.httpTecnologia.get<Tecnologia[]>(this.urlAPI)
      .pipe(
        first(),
        tap(apiTecnologia => apiTecnologia)
      )
  }
}
