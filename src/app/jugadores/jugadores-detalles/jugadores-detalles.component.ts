import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Jugador } from '../jugadores';
import { JugadoresService } from '../jugadores-service';

@Component({
  selector: 'app-jugadores-detalles',
  templateUrl: './jugadores-detalles.component.html',
  styleUrls: ['./jugadores-detalles.component.css'],
})
export class JugadoresDetallesComponent implements OnInit {
  jugador$!: Observable<Jugador>;
  mediaStats: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private jugadorService: JugadoresService
  ) {}

  ngOnInit() {
    this.jugador$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id')!;
        return this.jugadorService.getJugador(id);
      })
    );

    this.jugador$.subscribe(jugador => {
      this.actualizarBebida(jugador);
      this.calcularMedia(jugador);
    });
  }

  gotoJugadores() {
    this.router.navigate(['/jugadores']);
  }

  actualizarBebida(jugador: Jugador) {
    if (jugador.opcionBebida === 'Bebidas Caseras') {
      jugador.bebida = 99;
    } else if (
      jugador.opcionBebida === 'Ron' ||
      jugador.opcionBebida === 'Whisky' ||
      jugador.opcionBebida === 'Ginebra' ||
      jugador.opcionBebida === 'Vodka'
    ) {
      jugador.bebida = 79;
    } else if (
      jugador.opcionBebida === 'Bacardi Limon' ||
      jugador.opcionBebida === 'Licor 43'
    ) {
      jugador.bebida = 59;
    } else if (
      jugador.opcionBebida === 'Licores Comerciales' ||
      jugador.opcionBebida === 'Cerveza' ||
      jugador.opcionBebida === 'Calimocho' ||
      jugador.opcionBebida === 'Tinto De Verano'
    ) {
      jugador.bebida = 39;
    }
  
    // Actualizar trucos
    if (jugador.opcionTrucos === 'Si') {
      // Lógica para ajustar la puntuación de trucos si la opción es 'Sí'
      // Ejemplo:
      jugador.trucos = 39; // Asigna un valor de 50 si la opción es 'Sí'
    } else {
      // Lógica para ajustar la puntuación de trucos si la opción es 'No'
      // Ejemplo:
      jugador.trucos = 99; // Asigna un valor de 0 si la opción es 'No'
    }
  
    // Actualizar tubo
    if (jugador.opcionTubo === 'Si') {
      // Lógica para ajustar la puntuación de tubo si la opción es 'Sí'
      // Ejemplo:
      jugador.tubo = 99; // Asigna un valor de 75 si la opción es 'Sí'
    } else {
      // Lógica para ajustar la puntuación de tubo si la opción es 'No'
      // Ejemplo:
      jugador.tubo = 59; // Asigna un valor de 25 si la opción es 'No'
    }
  }
  
  calcularMedia(jugador: Jugador) {
    const stats = [
      jugador.alcoholismo,
      jugador.dinero,
      jugador.aguante,
      jugador.trucos,
      jugador.tubo,
      jugador.bebida,
    ];

    const sum = stats.reduce((a, b) => a + b, 0);
    const media = sum / stats.length;
    this.mediaStats = Math.floor(media);
  }
}
