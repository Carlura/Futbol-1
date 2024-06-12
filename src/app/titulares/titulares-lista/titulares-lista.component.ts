import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { TitularesService } from '../titulares-service';
import { Titular } from '../titulares';

@Component({
  selector: 'app-titulares-lista',
  templateUrl: './titulares-lista.component.html',
  styleUrls: ['./titulares-lista.component.css'],
})
export class TitularesListaComponent implements OnInit {
  titulares$!: Observable<Titular[]>;
  selectedId = 0;

  constructor(
    private service: TitularesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.titulares$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getTitulares();
      })
    );
  }
}
