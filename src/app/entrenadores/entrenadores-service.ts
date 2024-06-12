import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Entrenador } from './entrenadores';
import { ENTRENADORES } from './BDEntrenadores';
import { MessageService } from '../mensaje-service';

@Injectable({
  providedIn: 'root',
})
export class EntrenadoresService {
  constructor(private messageService: MessageService) {}

  getEntrenadores(): Observable<Entrenador[]> {
    this.messageService.add('EntrenadoresService: fetched entrenadores');
    return of(ENTRENADORES);
  }

  getEntrenador(id: string): Observable<Entrenador> {
    return this.getEntrenadores().pipe(
      map(
        (entrenadores) =>
          entrenadores.find((entrenadores) => entrenadores.id === +id)!
      )
    );
  }
}
