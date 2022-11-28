import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { Profesor } from 'src/app/models/profesor';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  constructor(
    private http: HttpClient
  ) { 

  }

  obtenerProfesores(): Observable<Profesor[]>{
    return this.http.get<Profesor[]>(`${environment.api}/profesores`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarErrorProfesor)
    )
  }

  obtenerProfesor(id: number): Observable<Profesor>{
    return this.http.get<Profesor>(`${environment.api}/profesores/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarErrorProfesor)
    )
  }

  agregarProfesor(profesor: Profesor){
    this.http.post(`${environment.api}/profesores/`, profesor, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarErrorProfesor)
    ).subscribe();
  }

  editarProfesor(profesor: Profesor){
    this.http.put<Profesor>(`${environment.api}/profesores/${profesor.id}`, profesor).pipe(
      catchError(this.manejarErrorProfesor)
    ).subscribe();
  }

  eliminarProfesor(id: number){
    this.http.delete<Profesor>(`${environment.api}/profesores/${id}`).pipe(
      catchError(this.manejarErrorProfesor)
    ).subscribe();
    alert("Registro eliminado");  
  }

  private manejarErrorProfesor(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }
}






