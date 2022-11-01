import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Estudiante } from 'src/app/models/estudiante';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {

  
   
  constructor(
    private http: HttpClient
    ) { 

  }

  obtenerEstudiantes(): Observable<Estudiante[]>{
    return this.http.get<Estudiante[]>(`${environment.api}/estudiantes`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarErrorEstudiante)
    )
  }

  obtenerEstudiantee(id: number): Observable<Estudiante>{
    return this.http.get<Estudiante>(`${environment.api}/estudiantes/${id}`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarErrorEstudiante)
    )
  }

  agregarEstudiante(estudiante: Estudiante){
    this.http.post(`${environment.api}/estudiantes/`, estudiante, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.manejarErrorEstudiante)
    ).subscribe(console.log);
  }

  editarEstudiante(estudiante: Estudiante){
    this.http.put<Estudiante>(`${environment.api}/estudiantes/${estudiante.id}`, estudiante).pipe(
      catchError(this.manejarErrorEstudiante)
    ).subscribe(console.log);
  }

  eliminarEstudiante(id: number){
    this.http.delete<Estudiante>(`${environment.api}/estudiantes/${id}`).pipe(
      catchError(this.manejarErrorEstudiante)
    ).subscribe(console.log);
    alert("Registro eliminado");  
  }

  private manejarErrorEstudiante(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.warn('Error del lado del cliente', error.error.message);
    }else{
      console.warn('Error del lado del servidor', error.error.message);
    }

    return throwError(() => new Error('Error en la comunicacion HTTP'));
  }

}
















