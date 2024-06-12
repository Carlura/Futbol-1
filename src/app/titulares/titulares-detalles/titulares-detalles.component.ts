// titulares-detalles.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Titular } from '../titulares';
import { TitularesService } from '../titulares-service';

@Component({
  selector: 'app-titulares-detalles',
  templateUrl: './titulares-detalles.component.html',
  styleUrls: ['./titulares-detalles.component.css']
})
export class TitularesDetallesComponent implements OnInit {
  titular$!: Observable<Titular>;
  mediaStats: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private titularService: TitularesService
  ) {}

  ngOnInit() {
    this.titular$ = this.route.paramMap.pipe(
      switchMap(params => {
        const id = params.get('id')!;
        return this.titularService.getTitular(id);
      })
    );

    this.titular$.subscribe(titular => {
      this.actualizarBebida(titular);
      this.calcularMedia(titular);
    });
  }

  gotoTitulares() {
    this.router.navigate(['/titulares']);
  }

  actualizarBebida(titular: Titular) {
    if (titular.opcionBebida === 'Bebidas Caseras') {
      titular.bebida = 99;
    } else if (
      titular.opcionBebida === 'Ron' ||
      titular.opcionBebida === 'Whisky' ||
      titular.opcionBebida === 'Ginebra' ||
      titular.opcionBebida === 'Vodka'
    ) {
      titular.bebida = 79;
    } else if (
      titular.opcionBebida === 'Bacardi Limon' ||
      titular.opcionBebida === 'Licor 43'
    ) {
      titular.bebida = 59;
    } else if (
      titular.opcionBebida === 'Licores Comerciales' ||
      titular.opcionBebida === 'Cerveza' ||
      titular.opcionBebida === 'Calimocho' ||
      titular.opcionBebida === 'Tinto De Verano'
    ) {
      titular.bebida = 39;
    }
  
    // Actualizar trucos
    if (titular.opcionTrucos === 'Si') {
      // Lógica para ajustar la puntuación de trucos si la opción es 'Sí'
      // Ejemplo:
      titular.trucos = 39; // Asigna un valor de 50 si la opción es 'Sí'
    } else {
      // Lógica para ajustar la puntuación de trucos si la opción es 'No'
      // Ejemplo:
      titular.trucos = 99; // Asigna un valor de 0 si la opción es 'No'
    }
  
    // Actualizar tubo
    if (titular.opcionTubo === 'Si') {
      // Lógica para ajustar la puntuación de tubo si la opción es 'Sí'
      // Ejemplo:
      titular.tubo = 99; // Asigna un valor de 75 si la opción es 'Sí'
    } else {
      // Lógica para ajustar la puntuación de tubo si la opción es 'No'
      // Ejemplo:
      titular.tubo = 59; // Asigna un valor de 25 si la opción es 'No'
    }
  }
  
  calcularMedia(titular: Titular) {
    const stats = [
      titular.alcoholismo,
      titular.dinero,
      titular.aguante,
      titular.trucos,
      titular.tubo,
      titular.bebida,
    ];

    const sum = stats.reduce((a, b) => a + b, 0);
    const media = sum / stats.length;
    this.mediaStats = Math.floor(media);
  }
}
