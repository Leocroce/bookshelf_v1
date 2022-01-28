import { Sagas } from './../modelosInterface/sagas';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicoDadosService {

  private saga!: Sagas;

  constructor() { }

  setSaga(saga: Sagas){
    this.saga = saga;
  }

  getSaga(saga: Sagas){
    return this.saga;
  }
}
