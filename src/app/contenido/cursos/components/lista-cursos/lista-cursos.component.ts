import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/contenido/cursos/services/curso.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { CursoState } from 'src/app/models/curso.state';
import { loadCursosFailure, loadCursosSuccess } from '../../state/cursos.actions';
import { selectStateCargando, selectStateCursos } from '../../state/cursos.selectors';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit, OnDestroy {
  cursos$!: Observable<Curso[]>
  cargando$!:Observable<boolean>
  suscripcionCursos!: Subscription | any;

  constructor(
    private cursoService: CursoService,
    private router: Router,
    private store: Store<CursoState>
  ) { }

  ngOnInit(): void {
    this.suscripcionCursos = this.cursoService.obtenerCursos().subscribe({
      next: (cursos: Curso[]) => {
        this.store.dispatch(loadCursosSuccess({cursos}))
      },
      error: (error: any) => {
        alert("Hubo un error")
        this.store.dispatch(loadCursosFailure(error))
      }

    });
    this.cursos$ = this.store.select(selectStateCursos)
    this.cargando$ = this.store.select(selectStateCargando)
  }

  ngOnDestroy(): void {
      this.suscripcionCursos.unsubscribe
  }

  eliminarCurso(id: number){
    this.cursoService.eliminarCurso(id);
    this.cursos$ = this.cursoService.obtenerCursos();
  }

  editarCurso(curso: Curso){
    this.router.navigate(['cursos/editar', curso]);
  }
}
