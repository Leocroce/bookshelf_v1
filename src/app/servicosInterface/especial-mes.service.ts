import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EspecialMes } from '../modelosInterface/especialMes';

@Injectable({
  providedIn: 'root'
})
export class EspecialMesService {
  private readonly uriAPI= '../../assets/especialMes.json'

  constructor(private especialMes: HttpClient) {}

  listagemNoticias() {
    return this.especialMes.get<EspecialMes[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiEspecialMes => console.log(apiEspecialMes))
    )
  }
}
