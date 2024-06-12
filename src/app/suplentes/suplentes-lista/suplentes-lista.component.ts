import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SuplentesService } from '../suplentes-service';
import { Suplente } from '../suplentes';

@Component({
  selector: 'app-suplentes-lista',
  templateUrl: './suplentes-lista.component.html',
  styleUrls: ['./suplentes-lista.component.css'],
})
export class SuplentesListaComponent implements OnInit {
  suplentes$!: Observable<Suplente[]>;
  selectedId = 0;

  constructor(
    private service: SuplentesService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.suplentes$ = this.route.paramMap.pipe(
      switchMap((params) => {
        this.selectedId = parseInt(params.get('id')!, 10);
        return this.service.getSuplentes();
      })
    );
  }
}
