import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Suplente } from '../suplentes';
import { SuplentesService } from '../suplentes-service';

@Component({
  selector: 'app-suplentes-detalles',
  templateUrl: './suplentes-detalles.component.html',
  styleUrls: ['./suplentes-detalles.component.css'],
})
export class SuplentesDetallesComponent implements OnInit {
  suplente$!: Observable<Suplente>;
  mediaStats: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private suplenteService: SuplentesService
  ) {}

  ngOnInit() {
    this.suplente$ = this.route.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id')!;
        return this.suplenteService.getSuplente(id);
      })
    );

    this.suplente$.subscribe((suplente) => {
      this.actualizarBebida(suplente);
      this.calcularMedia(suplente);
    });
  }

  gotoSuplentes() {
    this.router.navigate(['/suplentes']);
  }

  actualizarBebida(suplente: Suplente) {
    if (suplente.opcionBebida === 'Bebidas Caseras') {
      suplente.bebida = 99;
    } else if (
      suplente.opcionBebida === 'Ron' ||
      suplente.opcionBebida === 'Whisky' ||
      suplente.opcionBebida === 'Ginebra' ||
      suplente.opcionBebida === 'Vodka'
    ) {
      suplente.bebida = 79;
    } else if (
      suplente.opcionBebida === 'Bacardi Limon' ||
      suplente.opcionBebida === 'Licor 43'
    ) {
      suplente.bebida = 59;
    } else if (
      suplente.opcionBebida === 'Licores Comerciales' ||
      suplente.opcionBebida === 'Cerveza' ||
      suplente.opcionBebida === 'Calimocho' ||
      suplente.opcionBebida === 'Tinto De Verano'
    ) {
      suplente.bebida = 39;
    }

    // Actualizar trucos
    if (suplente.opcionTrucos === 'Si') {
      // Lógica para ajustar la puntuación de trucos si la opción es 'Sí'
      // Ejemplo:
      suplente.trucos = 39; // Asigna un valor de 50 si la opción es 'Sí'
    } else {
      // Lógica para ajustar la puntuación de trucos si la opción es 'No'
      // Ejemplo:
      suplente.trucos = 99; // Asigna un valor de 0 si la opción es 'No'
    }

    // Actualizar tubo
    if (suplente.opcionTubo === 'Si') {
      // Lógica para ajustar la puntuación de tubo si la opción es 'Sí'
      // Ejemplo:
      suplente.tubo = 99; // Asigna un valor de 75 si la opción es 'Sí'
    } else {
      // Lógica para ajustar la puntuación de tubo si la opción es 'No'
      // Ejemplo:
      suplente.tubo = 59; // Asigna un valor de 25 si la opción es 'No'
    }
  }

  calcularMedia(suplente: Suplente) {
    const stats = [
      suplente.alcoholismo,
      suplente.dinero,
      suplente.aguante,
      suplente.trucos,
      suplente.tubo,
      suplente.bebida,
    ];

    const sum = stats.reduce((a, b) => a + b, 0);
    const media = sum / stats.length;
    this.mediaStats = Math.floor(media);
  }
}
