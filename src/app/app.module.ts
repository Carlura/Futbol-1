import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { JugadoresModule } from './jugadores/jugadores.module';
import { EntrenadoresModule } from './entrenadores/entrenadores.module';
import { SuplentesModule } from './suplentes/suplentes.module';
import { TitularesModule } from './titulares/titulares.module';
import { RivalComponent } from './rival/rival.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    JugadoresModule,
    EntrenadoresModule,
    SuplentesModule,
    TitularesModule,
  ],
  declarations: [
    AppComponent,
    RivalComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
