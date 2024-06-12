import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EntrenadoresListaComponent } from './entrenadores-lista/entrenadores-lista.component';
import {  EntrenadoresDetallesComponent} from './entrenadores-detalles/entrenadores-detalles.component';

const entrenadoresRoutes: Routes = [
  { path: 'entrenadores', component: EntrenadoresListaComponent },
  { path: 'entrenadores/:id', component: EntrenadoresDetallesComponent },
];
@NgModule({
  imports: [RouterModule.forChild(entrenadoresRoutes)],
  exports: [RouterModule],
})
export class EntrenadoresRoutingModule { }
