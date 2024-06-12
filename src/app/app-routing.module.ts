import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { JugadoresListaComponent } from './jugadores/jugadores-lista/jugadores-lista.component';
import { EntrenadoresListaComponent } from './entrenadores/entrenadores-lista/entrenadores-lista.component';
import { SuplentesListaComponent } from './suplentes/suplentes-lista/suplentes-lista.component';
import { TitularesListaComponent } from './titulares/titulares-lista/titulares-lista.component';
import { TitularesDetallesComponent } from './titulares/titulares-detalles/titulares-detalles.component';
import { RivalComponent } from './rival/rival.component';

const routes: Routes = [
  { path: 'jugadores', component: JugadoresListaComponent },
  { path: 'titulares', component: TitularesListaComponent },
  { path: 'titulares/:id', component: TitularesDetallesComponent },
  { path: 'suplentes', component: SuplentesListaComponent },
  { path: 'entrenadores', component: EntrenadoresListaComponent },
  { path: 'rival', component: RivalComponent },
  { path: '', redirectTo: '/jugadores', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
