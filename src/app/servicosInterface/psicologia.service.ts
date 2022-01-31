import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';

import { Psicologia } from '../modelosInterface/psicologia';

@Injectable({
  providedIn: 'root'
})
export class PsicologiaService {

  private readonly uriAPI = '../../assets/psicologia.json';

  constructor(
    private httpPsicologia: HttpClient
  ) { }

  listarPsicologia(){
    return this.httpPsicologia.get<Psicologia[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiPsicologia => apiPsicologia)
    )
  }
}
