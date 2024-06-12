import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SuplentesListaComponent } from './suplentes-lista/suplentes-lista.component';
import { SuplentesDetallesComponent } from './suplentes-detalles/suplentes-detalles.component';

const suplentesRoutes: Routes = [
  { path: 'suplentes', component: SuplentesListaComponent },
  { path: 'suplentes/:id', component: SuplentesDetallesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(suplentesRoutes)],
  exports: [RouterModule],
})

export class SuplentesRoutingModule { }
