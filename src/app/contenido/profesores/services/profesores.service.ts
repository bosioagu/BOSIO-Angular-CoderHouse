import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { Profesor } from 'src/app/models/profesor';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  private profesores: Profesor[] = [
    {
      id: 1,
      nombre: 'Carlos',
      apellido: 'Perez',
      curso: 'Java',
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 2,
      nombre: 'Fernando',
      apellido: 'Zuain',
      curso: 'React',
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 3,
      nombre: 'Diego',
      apellido: 'Osella',
      curso: 'Angular',
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    },
    {
      id: 4,
      nombre: 'Federico',
      apellido: 'Lopez',
      curso: 'VueJS',
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    }
  ];
  private profesoresSubect: BehaviorSubject<Profesor[]>;


  constructor() { 
    this.profesoresSubect = new BehaviorSubject<Profesor[]>(this.profesores);
  }

  obtenerProfesores(): Observable<Profesor[]>{
    return this.profesoresSubect.asObservable();
  }

  obtenerEstudiante(id: number): Observable<Profesor[]>{
    return this.obtenerProfesores().pipe(
      map((profesores: Profesor[]) => profesores.filter((profesor: Profesor) => profesor.id === id))
    )
  }

  agregarProfesor(profesor: Profesor){
    this.profesores.push(profesor);
    this.profesoresSubect.next(this.profesores);
  }

  editarProfesor(profesor: Profesor){
    let indice = this.profesores.findIndex((p: Profesor) => p.id === profesor.id);

    if(indice > -1){
      this.profesores[indice] = profesor;
    }

    this.profesoresSubect.next(this.profesores);
  }

  eliminarProfesor(id: number){
    let indice = this.profesores.findIndex((p: Profesor) => p.id === id);

    if(indice > -1){
      this.profesores.splice(indice, 1);
    }

    this.profesoresSubect.next(this.profesores);
  }
}
