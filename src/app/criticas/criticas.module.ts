import { ReactiveFormsModule } from '@angular/forms';
import { AppCompartilhadoModule } from './../app-compartilhado/app-compartilhado.module';
import { AppMaterialModule } from './../app-compartilhado/app-material/app-material.module';
import { CriticasRoutingModule } from './criticas-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CriticasComponent } from './criticas/criticas.component';
import { CriticasDialogoComponent } from './dialogos/criticas-dialogo/criticas-dialogo.component';



@NgModule({
  declarations: [
    CriticasComponent,
    CriticasDialogoComponent
  ],
  imports: [
    CommonModule,
    CriticasRoutingModule,
    AppMaterialModule,
    AppCompartilhadoModule,
    ReactiveFormsModule
  ]
})
export class CriticasModule { }
