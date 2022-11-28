import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as CursosActions from './cursos.actions';


@Injectable()
export class CursosEffects {

  loadCursoss$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(CursosActions.loadCursos),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => CursosActions.loadCursosSuccess({ data })),
          catchError(error => of(CursosActions.loadCursosFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
