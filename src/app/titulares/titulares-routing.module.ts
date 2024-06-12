import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TitularesListaComponent } from './titulares-lista/titulares-lista.component';
import { TitularesDetallesComponent } from './titulares-detalles/titulares-detalles.component';

const titularesRoutes: Routes = [
  { path: 'titulares', component: TitularesListaComponent },
  { path: 'titulares/:id', component: TitularesDetallesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(titularesRoutes)],
  exports: [RouterModule],
})
export class TitularesRoutingModule {}
