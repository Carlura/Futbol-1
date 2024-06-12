import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { JugadoresRoutingModule } from './jugadores-routing.module';
import { JugadoresListaComponent } from './jugadores-lista/jugadores-lista.component';
import { JugadoresDetallesComponent } from './jugadores-detalles/jugadores-detalles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    JugadoresRoutingModule
  ],
  declarations: [
    JugadoresListaComponent,
    JugadoresDetallesComponent
  ]
})
export class JugadoresModule { }
