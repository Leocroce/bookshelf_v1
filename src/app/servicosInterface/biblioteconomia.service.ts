import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { Biblioteconomia } from './../modelosInterface/biblioteconomia';

@Injectable({
  providedIn: 'root'
})
export class BiblioteconomiaService {

  private readonly uriAPI='../../assets/biblioteconomia.json';

  constructor(
    private httpBiblioteconomia: HttpClient
  ) { }

  listarBiblioteconomia(){
    return this.httpBiblioteconomia.get<Biblioteconomia[]>(this.uriAPI)
    .pipe(
      first(),
      tap(apiBiblioteconomia => apiBiblioteconomia)
    )
  }
}
