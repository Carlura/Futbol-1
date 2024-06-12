import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Entrenador } from '../entrenadores';
import { EntrenadoresService } from '../entrenadores-service';

@Component({
  selector: 'app-entrenadores-detalles',
  templateUrl: './entrenadores-detalles.component.html',
  styleUrls: ['./entrenadores-detalles.component.css'],
})
export class EntrenadoresDetallesComponent implements OnInit {
  entrenador$!: Observable<Entrenador>;
  mediaStats: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private entrenadorService: EntrenadoresService
  ) {}

  ngOnInit() {
    this.entrenador$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id')!;
        return this.entrenadorService.getEntrenador(id);
      })
    );

    this.entrenador$.subscribe(entrenador => {
      this.actualizarBebida(entrenador);
      this.calcularMedia(entrenador);
    });
  }

  gotoEntrenadores() {
    this.router.navigate(['/entrenadores']);
  }

  actualizarBebida(entrenador: Entrenador) {
    if (entrenador.opcionBebida === 'Bebidas Caseras') {
      entrenador.bebida = 99;
    } else if (
      entrenador.opcionBebida === 'Ron' ||
      entrenador.opcionBebida === 'Whisky' ||
      entrenador.opcionBebida === 'Ginebra' ||
      entrenador.opcionBebida === 'Vodka'
    ) {
      entrenador.bebida = 79;
    } else if (
      entrenador.opcionBebida === 'Bacardi Limon' ||
      entrenador.opcionBebida === 'Licor 43'
    ) {
      entrenador.bebida = 59;
    } else if (
      entrenador.opcionBebida === 'Licores Comerciales' ||
      entrenador.opcionBebida === 'Cerveza' ||
      entrenador.opcionBebida === 'Calimocho' ||
      entrenador.opcionBebida === 'Tinto De Verano'
    ) {
      entrenador.bebida = 39;
    }
  
    // Actualizar trucos
    if (entrenador.opcionTrucos === 'Si') {
      // Lógica para ajustar la puntuación de trucos si la opción es 'Sí'
      // Ejemplo:
      entrenador.trucos = 39; // Asigna un valor de 50 si la opción es 'Sí'
    } else {
      // Lógica para ajustar la puntuación de trucos si la opción es 'No'
      // Ejemplo:
      entrenador.trucos = 99; // Asigna un valor de 0 si la opción es 'No'
    }
  
    // Actualizar tubo
    if (entrenador.opcionTubo === 'Si') {
      // Lógica para ajustar la puntuación de tubo si la opción es 'Sí'
      // Ejemplo:
      entrenador.tubo = 99; // Asigna un valor de 75 si la opción es 'Sí'
    } else {
      // Lógica para ajustar la puntuación de tubo si la opción es 'No'
      // Ejemplo:
      entrenador.tubo = 59; // Asigna un valor de 25 si la opción es 'No'
    }
  }
  
  calcularMedia(entrenador: Entrenador) {
    const stats = [
      entrenador.alcoholismo,
      entrenador.dinero,
      entrenador.aguante,
      entrenador.trucos,
      entrenador.tubo,
      entrenador.bebida,
    ];

    const sum = stats.reduce((a, b) => a + b, 0);
    const media = sum / stats.length;
    this.mediaStats = Math.floor(media);
  }
}
