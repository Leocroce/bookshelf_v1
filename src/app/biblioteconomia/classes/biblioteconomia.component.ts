import { BiblioteconomiaService } from './../../servicosInterface/biblioteconomia.service';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable, of, tap } from 'rxjs';
import { Biblioteconomia } from './../modelos/biblioteconomia';

@Component({
  selector: 'app-biblioteconomia',
  templateUrl: './biblioteconomia.component.html',
  styleUrls: ['./biblioteconomia.component.scss']
})
export class BiblioteconomiaComponent implements OnInit {

  cardsBiblioteconomia$: Observable<Biblioteconomia[]>;
  cardsBiblioteconomia = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(({ matches }) => {
      if (matches) {
        return this.cardsBiblioteconomia$;
      }
      return this.cardsBiblioteconomia$;
    })
  );

  @ViewChild('searchInput') searchInput!: ElementRef;

  constructor(
    biblioteconomiaService: BiblioteconomiaService,
    private breakpointObserver: BreakpointObserver,
  ) {
    this.cardsBiblioteconomia$ = biblioteconomiaService.listarBiblioteconomia()
    .pipe(
      catchError(error => {
        return of([])
      })
    );
  }

  ngOnInit(): void {
  }
  }
