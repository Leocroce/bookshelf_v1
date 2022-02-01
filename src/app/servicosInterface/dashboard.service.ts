import { Dashboard } from './../modelosInterface/dashboard';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { first, tap, delay, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly uriAPI = '../../assets/dashboard.json';

  constructor(private cardsDashboard: HttpClient) { }

  listagemCards() {
    return this.cardsDashboard.get<Dashboard[]>(this.uriAPI)
      .pipe(
        first(),
        delay(500),
        tap(apiDashboard => console.log(apiDashboard))
      )
  }

  pesquisarFeed(query: string) {
    return this.cardsDashboard.get<Dashboard[]>(this.uriAPI).pipe(
      map((resp) => resp.find(g => (g.titulo.toLowerCase()).startsWith(query.toLowerCase()) || (g.subtitulo.toLowerCase()).startsWith(query.toLowerCase())))
    )
  }

}
