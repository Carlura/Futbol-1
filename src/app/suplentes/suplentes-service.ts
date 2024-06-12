import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Suplente } from './suplentes';
import { SUPLENTES } from './BDSuplentes';
import { MessageService } from '../mensaje-service';

@Injectable({
  providedIn: 'root',
})
export class SuplentesService {
  constructor(private messageService: MessageService) {}

  getSuplentes(): Observable<Suplente[]> {
    this.messageService.add('SuplentesService: fetched suplentes');
    return of(SUPLENTES);
  }

  getSuplente(id: string): Observable<Suplente> {
    return this.getSuplentes().pipe(
      map(suplentes => suplentes.find(suplente => suplente.id === +id)!)
    );
  }
}
