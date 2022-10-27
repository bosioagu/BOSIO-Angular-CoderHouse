import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Estudiante } from 'src/app/models/estudiante';

@Injectable({
  providedIn: 'root'
})
export class EstudianteService {
  private estudiantes: Estudiante[] = [
    {
      id: 1,
      nombre: 'Fernando',
      apellido: 'Garcia',
      fechaNacimiento: new Date(2022, 0, 1),
      telefono: '351333333',
      documento: '33600300',
      conocimiento: "React",
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 2,
      nombre: 'Alejandro',
      apellido: 'Perez',
      fechaNacimiento: new Date(2022, 0, 1),
      telefono: '351333333',
      documento: '33600300',
      conocimiento: "Java",
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 3,
      nombre: 'Martín',
      apellido: 'Gonzalez',
      fechaNacimiento: new Date(2022, 0, 1),
      telefono: '351333333',
      documento: '33600300',
      conocimiento: "Angular",
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 4,
      nombre: 'Sebastian',
      apellido: 'Diaz',
      fechaNacimiento: new Date(2022, 0, 1),
      telefono: '351333333',
      documento: '33600300',
      conocimiento: "Angular",
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    }
  ];
  private estudiantesSubect: BehaviorSubject<Estudiante[]>;


  constructor() { 
    this.estudiantesSubect = new BehaviorSubject<Estudiante[]>(this.estudiantes);
  }

  obtenerEstudiantes(): Observable<Estudiante[]>{
    return this.estudiantesSubect.asObservable();
  }

  obtenerEstudiante(id: number): Observable<Estudiante[]>{
    return this.obtenerEstudiantes().pipe(
      map((estudiantes: Estudiante[]) => estudiantes.filter((estudiante: Estudiante) => estudiante.id === id))
    )
  }

  agregarEstudiante(estudiante: Estudiante){
    this.estudiantes.push(estudiante);
    this.estudiantesSubect.next(this.estudiantes);
  }

  editarEstudiante(estudiante: Estudiante){
    let indice = this.estudiantes.findIndex((c: Estudiante) => c.id === estudiante.id);

    if(indice > -1){
      this.estudiantes[indice] = estudiante;
    }

    this.estudiantesSubect.next(this.estudiantes);
  }

  eliminarEstudiante(id: number){
    let indice = this.estudiantes.findIndex((c: Estudiante) => c.id === id);

    if(indice > -1){
      this.estudiantes.splice(indice, 1);
    }

    this.estudiantesSubect.next(this.estudiantes);
  }
}
