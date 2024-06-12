import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Jugador } from '../jugadores/jugadores';
import { JugadoresService } from '../jugadores/jugadores-service';

@Component({
  selector: 'app-rival',
  templateUrl: './rival.component.html',
  styleUrls: ['./rival.component.css'],
})
export class RivalComponent implements OnInit {
  jugadores$: Observable<Jugador[]>;
  selectedJugador: Jugador | null = null;
  mediaStats: number = 0;
  userStats = {
    name: '',
    alcoholismo: 0,
    dinero: 0,
    aguante: 0,
    opcionTrucos: '',
    opcionTubo: '',
    opcionBebida: '',
  };
  mediaUserStats: number = 0;
  mediaSelectedJugador: number = 0;

  constructor(private jugadoresService: JugadoresService) {
    this.jugadores$ = this.jugadoresService.getJugadores();
  }

  ngOnInit() {}

  onJugadorSelect(event: Event): void {
    const target = event.target as HTMLSelectElement;
    const jugadorId = target.value;
    this.jugadores$.subscribe((jugadores) => {
      this.selectedJugador =
        jugadores.find((jugador) => jugador.id === +jugadorId) || null;
      if (this.selectedJugador) {
        this.calcularMedia(this.selectedJugador);
      }
    });
  }

  calcularMedia(jugador: Jugador) {
    const stats = [
      jugador.alcoholismo,
      jugador.dinero,
      jugador.aguante,
      this.obtenerValorTrucos(jugador.opcionTrucos.toString()), // Convertir a string
      this.obtenerValorTubo(jugador.opcionTubo.toString()),
      this.obtenerValorBebida(jugador.opcionBebida.toString()),
    ];

    const sum = stats.reduce((a, b) => a + b, 0);
    const media = sum / stats.length;
    this.mediaStats = Math.floor(media);
  }

  calcularMediaUserStats() {
    const trucosValue = this.obtenerValorTrucos(
      this.userStats.opcionTrucos.toString()
    ); // Convertir a string
    const tuboValue = this.obtenerValorTubo(
      this.userStats.opcionTubo.toString()
    );
    const bebidaValue = this.obtenerValorBebida(
      this.userStats.opcionBebida.toString()
    );

    this.userStats.alcoholismo = Math.min(this.userStats.alcoholismo, 99);
    this.userStats.dinero = Math.min(this.userStats.dinero, 99);
    this.userStats.aguante = Math.min(this.userStats.aguante, 99);
    const stats = [
      this.userStats.alcoholismo,
      this.userStats.dinero,
      this.userStats.aguante,
      trucosValue,
      tuboValue,
      bebidaValue,
    ];
    const sum = stats.reduce((a, b) => a + b, 0);
    const media = sum / stats.length;
    this.mediaUserStats = Math.floor(media);
  }

  obtenerValorBebida(bebida: string): number {
    switch (bebida) {
      case 'Bebidas Caseras':
        return 99;
      case 'Ron':
      case 'Whisky':
      case 'Ginebra':
      case 'Vodka':
        return 79;
      case 'Bacardi Limon':
      case 'Licor 43':
        return 59;
      case 'Licores Comerciales':
      case 'Cerveza':
      case 'Calimocho':
      case 'Tinto De Verano':
        return 39;
      default:
        return 0;
    }
  }

  obtenerValorTrucos(opcionTrucos: string): number {
    return opcionTrucos === 'Si' ? 39 : 99;
  }

  obtenerValorTubo(tubo: string): number {
    return tubo === 'Si' ? 99 : 59;
  }

  compararStat(userStat: number, jugadorStat: number): string {
    return userStat > jugadorStat ? '>' : userStat < jugadorStat ? '<' : '=';
  }

  // Dentro de tu archivo .ts

  obtenerOpcionTrucos(opcionTrucos: string): string {
    return opcionTrucos === 'Si' ? 'Sí' : 'No';
  }

  obtenerOpcionTubo(opcionTubo: string): string {
    return opcionTubo === 'Si' ? 'Sí' : 'No';
  }

  obtenerOpcionBebida(opcionBebida: string): string {
    switch (opcionBebida) {
      case 'Bebidas Caseras':
        return 'Bebidas Caseras';
      case 'Ron':
      case 'Whisky':
      case 'Ginebra':
      case 'Vodka':
        return 'Alcohol fuerte';
      case 'Bacardi Limon':
      case 'Licor 43':
        return 'Alcohol medio';
      case 'Licores Comerciales':
      case 'Cerveza':
      case 'Calimocho':
      case 'Tinto De Verano':
        return 'Bebida ligera';
      default:
        return 'Desconocida';
    }
  }
}
