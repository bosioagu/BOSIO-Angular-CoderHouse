import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor';
import { ProfesoresService } from '../../services/profesores.service';

@Component({
  selector: 'app-agregar-profesor',
  templateUrl: './agregar-profesor.component.html',
  styleUrls: ['./agregar-profesor.component.css']
})
export class AgregarProfesorComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private profesorService: ProfesoresService,
    private router: Router
  ) {
    this.formulario = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      curso: new FormControl('', [Validators.required]),
    });
  }

  agregarCurso(){
    const profesoresSubect: Profesor = {
      id: Math.round(Math.random()*1000),
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      curso: this.formulario.value.curso,
      imagen: 'https://parentesis.com/imagesPosts/coder00.jpg'
    };
    console.log(profesoresSubect);
    this.profesorService.agregarProfesor(profesoresSubect);
    this.router.navigate(['profesores/listar']); // localhost/cursos/listar
  }

  ngOnInit(): void {
  }

}
