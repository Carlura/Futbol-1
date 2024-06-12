import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Titular } from './titulares';
import { TITULARES } from './BDTitulares';
import { MessageService } from '../mensaje-service';

@Injectable({
  providedIn: 'root',
})
export class TitularesService {
  constructor(private messageService: MessageService) {}

  getTitulares(): Observable<Titular[]> {
    this.messageService.add('TitularesService: fetched titulares');
    return of(TITULARES);
  }

  getTitular(id: string): Observable<Titular> {
    return this.getTitulares().pipe(
      map(titulares => titulares.find(titulares => titulares.id === +id)!)
    );
  }
}
