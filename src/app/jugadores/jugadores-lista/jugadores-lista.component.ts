import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { JugadoresService } from '../jugadores-service';
import { Jugador } from '../jugadores';

@Component({
  selector: 'app-jugadores-lista',
  templateUrl: './jugadores-lista.component.html',
  styleUrls: ['./jugadores-lista.component.css']
})
export class JugadoresListaComponent implements OnInit {
  jugadores$!: Observable<Jugador[]>;
  selectedId = 0;

  constructor(
    private service: JugadoresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.jugadores$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getJugadores();
      })
    );
  }
}