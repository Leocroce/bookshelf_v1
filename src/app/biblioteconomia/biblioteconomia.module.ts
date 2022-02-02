import { ReactiveFormsModule } from '@angular/forms';
import { AppCompartilhadoModule } from './../app-compartilhado/app-compartilhado.module';
import { AppMaterialModule } from './../app-compartilhado/app-material/app-material.module';
import { BiblioteconomiaRoutingModule } from './biblioteconomia-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BiblioteconomiaComponent } from './classes/biblioteconomia.component';


@NgModule({
  declarations: [
    BiblioteconomiaComponent,
  ],
  imports: [
    CommonModule,
    BiblioteconomiaRoutingModule,
    AppMaterialModule,
    AppCompartilhadoModule,
    ReactiveFormsModule
  ]
})
export class BiblioteconomiaModule { }