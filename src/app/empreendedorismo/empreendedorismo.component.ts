import { AutenticacaoFirebaseService } from './../servicosInterface/autenticacao-firebase.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, catchError, of, map} from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EmpreendedorismoService } from './../servicosInterface/empreendedorismo.service';
import { Empreendedorismo } from '../modelosInterface/empreendedorismo';

@Component({
  selector: 'app-empreendedorismo',
  templateUrl: './empreendedorismo.component.html',
  styleUrls: ['./empreendedorismo.component.scss']
})
export class EmpreendedorismoComponent implements OnInit {

  livrosEmpreendedorismo$: Observable<Empreendedorismo[]>
  usuario$ = this.autenticacaoFirebaseService.usuarioLogado$
  empreendedorismoCards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if(matches) {
        return this.livrosEmpreendedorismo$;
      }
      return this.livrosEmpreendedorismo$;
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private autenticacaoFirebaseService: AutenticacaoFirebaseService,
    private empreendedorismoService: EmpreendedorismoService,
    ) {
      this.livrosEmpreendedorismo$ = empreendedorismoService.listagemCardsEmpreendedorismo()
    }

  ngOnInit(): void {
  }

}
