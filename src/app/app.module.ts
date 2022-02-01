import { PerfilComponent } from './perfil/perfil.component';
import { LayoutModule } from '@angular/cdk/layout';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HotToastModule } from '@ngneat/hot-toast';

import { environment } from '../environments/environment';
import { AppMaterialModule } from './app-compartilhado/app-material/app-material.module';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed/feed.component';
import { NavegacaoComponent } from './navegacao/navegacao.component';
import { AppCadastroComponent } from './app-cadastro/app-cadastro.component';
import { AppNotFoundComponent } from './app-not-found/app-not-found.component';
import { RecaptchaModule } from 'ng-recaptcha';
import { DetalheSagaComponent } from './detalhe-saga/detalhe-saga.component';
import { SagasComponent } from './sagas/sagas.component';
import { MatStepperModule } from '@angular/material/stepper';
import { IsbnComponent } from './isbn/isbn.component';
import { EspecialMesComponent } from './especial-mes/especial-mes.component';
import { EmpreendedorismoComponent } from './empreendedorismo/empreendedorismo.component';
import { DireitoComponent } from './direito/direito.component';
import { PsicologiaComponent } from './psicologia/psicologia.component';
import { ArtesComponent } from './artes/artes.component';
import { SugestoesComponent } from './sugestoes/sugestoes.component';
import { TeatroComponent } from './teatro/teatro.component';
import { TecnologiaComponent } from './tecnologia/tecnologia.component';
import { MaisVendidosComponent } from './mais-vendidos/mais-vendidos.component';
import { AppRecuperarSenhaComponent } from './app-recuperar-senha/app-recuperar-senha.component';
import { AjudaComponent } from './ajuda/ajuda.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegacaoComponent,
    FeedComponent,
    AppLoginComponent,
    AppCadastroComponent,
    AppNotFoundComponent,
    PerfilComponent,
    SagasComponent,
    DetalheSagaComponent,
    IsbnComponent,
    EspecialMesComponent,
    EmpreendedorismoComponent,
    DireitoComponent,
    PsicologiaComponent,
    ArtesComponent,
    SugestoesComponent,
    TeatroComponent,
    TecnologiaComponent,
    MaisVendidosComponent,
    AppRecuperarSenhaComponent,
    AjudaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatStepperModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage()),
    HotToastModule.forRoot(),
    RecaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
