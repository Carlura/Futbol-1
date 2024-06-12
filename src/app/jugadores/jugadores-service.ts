import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Jugador } from './jugadores';
import { JUGADORES } from './BDJugadores';
import { MessageService } from '../mensaje-service';

@Injectable({
  providedIn: 'root',
})
export class JugadoresService {
  constructor(private messageService: MessageService) {}

  getJugadores(): Observable<Jugador[]> {
    this.messageService.add('JugadoresService: fetched jugadores');
    return of(JUGADORES);
  }

  getJugador(id: string): Observable<Jugador> {
    return this.getJugadores().pipe(
      map(jugadores => jugadores.find(jugador => jugador.id === +id)!)
    );
  }
}
