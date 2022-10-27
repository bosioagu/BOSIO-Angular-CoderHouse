import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.css']
})
export class ListarEstudianteComponent implements OnInit {
  estudiantes$!: Observable<Estudiante[]>

  constructor(
    private estudianteService: EstudianteService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.estudiantes$ = this.estudianteService.obtenerEstudiantes();
  }

  eliminarEstudiante(id: number){
    this.estudianteService.eliminarEstudiante(id);
  }

  editarEstudiante(estudiante: Estudiante){
    this.router.navigate(['estudiantes/editar', estudiante]);
  }

}
