import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Teatro } from './../modelosInterface/teatro';

@Injectable({
  providedIn: 'root'
})
export class TeatroService {

  private readonly uriAPI='../../assets/teatro.json';

  constructor(
    private httpTeatro: HttpClient
  ) { }

  listarTeatro(){
    return this.httpTeatro.get<Teatro[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiTeatro => apiTeatro)
    )
  }
}

