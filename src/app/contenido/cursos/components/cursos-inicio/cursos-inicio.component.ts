import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { selectSesionActiva } from 'src/app/core/state/sesion.selectors';
import { Curso } from 'src/app/models/curso';
import { CursoState } from 'src/app/models/curso.state';
import { Sesion } from 'src/app/models/sesion';
import { cargarCursos, cursosCargados } from 'src/app/state/actions/curso.action';
import { AppState } from 'src/app/state/app.state';
import { CursoService } from '../../services/curso.service';
import { loadCursos} from '../../state/cursos.actions';

@Component({
  selector: 'app-cursos-inicio',
  templateUrl: './cursos-inicio.component.html',
  styleUrls: ['./cursos-inicio.component.css']
})
export class CursosInicioComponent implements OnInit {
  sesion$!: Observable<Sesion>
  //cursoService: any;

  constructor(
    private cursoService: CursoService,
    private store: Store<CursoState>,
    public route: Router
  ) { 
    this.store.dispatch(cargarCursos())
    this.sesion$ = this.store.select(selectSesionActiva)
  }
  ngOnInit(): void {
    this.cursoService.obtenerCursos().subscribe((cursos: Curso[]) => {
      this.store.dispatch(loadCursos());
    })
  }

}
