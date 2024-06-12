import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SuplentesRoutingModule } from './suplentes-routing.module';
import { SuplentesListaComponent } from './suplentes-lista/suplentes-lista.component';
import { SuplentesDetallesComponent } from './suplentes-detalles/suplentes-detalles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SuplentesRoutingModule
  ],
  declarations: [
    SuplentesListaComponent,
    SuplentesDetallesComponent
  ]
})
export class SuplentesModule { }
