import { first, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Biblioteconomia } from '../modelos/biblioteconomia';

@Injectable({
  providedIn: 'root'
})
export class BiblioteconomiaService {

  private readonly urlAPI = '/src/assets/biblioteconomia.json'

  constructor(private biblioteconomia: HttpClient) { }

  listarBiblioteconomia() {
    return this.biblioteconomia.get<Biblioteconomia[]>(this.urlAPI)
    .pipe(
      first(),
      tap(apiBiblioteconomia => console.log(apiBiblioteconomia))
    )
  }
}
