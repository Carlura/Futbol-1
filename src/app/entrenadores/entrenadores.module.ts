import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EntrenadoresRoutingModule } from './entrenadores-routing.module';
import { EntrenadoresListaComponent } from './entrenadores-lista/entrenadores-lista.component';
import {  EntrenadoresDetallesComponent} from './entrenadores-detalles/entrenadores-detalles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    EntrenadoresRoutingModule
  ],
  declarations: [
    EntrenadoresListaComponent,
    EntrenadoresDetallesComponent  ]
})
export class EntrenadoresModule { }
