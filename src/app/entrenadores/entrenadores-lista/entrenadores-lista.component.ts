import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { EntrenadoresService } from '../entrenadores-service';
import { Entrenador } from '../entrenadores';

@Component({
  selector: 'app-entrenadores-lista',
  templateUrl: './entrenadores-lista.component.html',
  styleUrls: ['./entrenadores-lista.component.css'],
})
export class EntrenadoresListaComponent implements OnInit {
  entrenadores$!: Observable<Entrenador[]>;
  selectedId = 0;

  constructor(
    private service: EntrenadoresService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.entrenadores$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getEntrenadores();
      })
    );
  }
}
