import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Profesor } from 'src/app/models/profesor';
import { ProfesoresService } from '../../services/profesores.service';

@Component({
  selector: 'app-lista-profesor',
  templateUrl: './lista-profesor.component.html',
  styleUrls: ['./lista-profesor.component.css']
})
export class ListaProfesorComponent implements OnInit {

 profesores$!: Observable<Profesor[]>

  constructor(
    private profesorService: ProfesoresService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.profesores$ = this.profesorService.obtenerProfesores();
  }

  eliminarProfesor(id: number){
    this.profesorService.eliminarProfesor(id);
    this.profesores$ = this.profesorService.obtenerProfesores();
  }

  editarProfesor(profesor: Profesor){
    this.router.navigate(['profesores/editar', profesor]);
  }

}