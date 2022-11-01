import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.css']
})
export class AgregarEstudianteComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private estudianteService: EstudianteService,
    private router: Router,
  ) {

    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required, Validators.minLength(10)]),
      documento: new FormControl('', [Validators.required]),
      conocimiento: new FormControl('', [Validators.required])
    })
  }

  agregarCurso(){
    const estudiante: Estudiante = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      fechaNacimiento: this.formulario.value.fechaNacimiento,
      telefono: this.formulario.value.telefono,
      documento: this.formulario.value.documento,
      conocimiento: this.formulario.value.conocimiento,
      imagen: 'https://www.w3schools.com/w3images/avatar6.png'
    };
    console.log(estudiante);
    this.estudianteService.agregarEstudiante(estudiante);
    this.router.navigate(['estudiantes/listar']); // localhost/cursos/listar
  }

  ngOnInit(): void {
  }

}
