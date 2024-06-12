import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JugadoresListaComponent } from './jugadores-lista/jugadores-lista.component';
import { JugadoresDetallesComponent } from './jugadores-detalles/jugadores-detalles.component';

const jugadoresRoutes: Routes = [
  { path: 'jugadores', component: JugadoresListaComponent },
  { path: 'jugadores/:id', component: JugadoresDetallesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(jugadoresRoutes)],
  exports: [RouterModule],
})
export class JugadoresRoutingModule {}
