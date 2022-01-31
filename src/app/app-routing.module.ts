import { IsbnComponent } from './isbn/isbn.component';
import { DetalheSagaComponent } from './detalhe-saga/detalhe-saga.component';
import { SagasComponent } from './sagas/sagas.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { FeedComponent } from './feed/feed.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';
import { EspecialMesComponent } from './especial-mes/especial-mes.component';
import { EmpreendedorismoComponent } from './empreendedorismo/empreendedorismo.component';
import { DireitoComponent } from './direito/direito.component';
import { PsicologiaComponent } from './psicologia/psicologia.component';

const enviarSemLogin = () => redirectUnauthorizedTo(['/app-app-cadastro']);

const routes: Routes = [
  {
    path: '', pathMatch: 'full', redirectTo: 'app-app-cadastro'
  },
  {
    path:'app-app-cadastro', component: AppCadastroComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent,
  },
  {
    path: 'feed', component: FeedComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'sagas', component: SagasComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'saga', component: DetalheSagaComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'isbn', component: IsbnComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'especial', component: EspecialMesComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'empreendedorismo', component: EmpreendedorismoComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'direito', component: DireitoComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'psicologia', component: PsicologiaComponent,
    ...canActivate(enviarSemLogin)
  },
  {
    path: 'cdd',
    loadChildren: () => import('./cdd/cdd.module').then(c => c.CddModule),
    ...canActivate(enviarSemLogin)
  },
  {
    path: '**', component: AppNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
