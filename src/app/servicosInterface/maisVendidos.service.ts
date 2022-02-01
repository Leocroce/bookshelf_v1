import { MaisVendidosComponent } from '../mais-vendidos/mais-vendidos.component';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap } from 'rxjs';
import { MaisVendidos } from '../modelosInterface/maisVendidos';

@Injectable({
  providedIn: 'root'
})
export class MaisVendidosService {

  private readonly uriAPIBrasil = '../../assets/maisVendidosBrasil.json';
  private readonly uriAPIInternacional = '../../assets/maisVendidosInternacional.json';

  constructor(
    private httpMaisVendidos: HttpClient
  ) { }

  listarMaisVendidosBrasil(){
    return this.httpMaisVendidos.get<MaisVendidos[]>(this.uriAPIBrasil)
    .pipe(
      first(),
      tap(apiMaisVendidos => apiMaisVendidos)
    );
  }
  listarMaisVendidosInternacional(){
    return this.httpMaisVendidos.get<MaisVendidos[]>(this.uriAPIInternacional)
    .pipe(
      first(),
      tap(apiMaisVendidos => apiMaisVendidos)
    )
  }
}
