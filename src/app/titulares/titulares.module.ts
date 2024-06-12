import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule aquí

import { TitularesRoutingModule } from './titulares-routing.module';
import { TitularesListaComponent } from './titulares-lista/titulares-lista.component';
import { TitularesDetallesComponent } from './titulares-detalles/titulares-detalles.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TitularesRoutingModule,
    RouterModule, // Y agregar RouterModule aquí también
  ],
  declarations: [TitularesListaComponent, TitularesDetallesComponent],
})
export class TitularesModule {}
