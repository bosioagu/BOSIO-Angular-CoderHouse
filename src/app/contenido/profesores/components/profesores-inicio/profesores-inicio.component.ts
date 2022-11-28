import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { CursoState } from 'src/app/models/curso.state';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'app-profesores-inicio',
  templateUrl: './profesores-inicio.component.html',
  styleUrls: ['./profesores-inicio.component.css']
})
export class ProfesoresInicioComponent implements OnInit {
  sesion$!: Observable<Sesion>
  

  constructor(
    private sesionService: SesionService,
    private store: Store<CursoState>,
    public route: Router
  ) { 
    this.sesion$ = this.store.select(selectSesionActiva)
  }
  ngOnInit(): void {
  }

}
