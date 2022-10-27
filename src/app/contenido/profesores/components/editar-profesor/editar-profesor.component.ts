import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Profesor } from 'src/app/models/profesor';
import { ProfesoresService } from '../../services/profesores.service';

@Component({
  selector: 'app-editar-profesor',
  templateUrl: './editar-profesor.component.html',
  styleUrls: ['./editar-profesor.component.css']
})
export class EditarProfesorComponent implements OnInit {

  formulario!: FormGroup;
  id!: number;
  fileName = '';
  imagen: any = ""

  constructor(
    private activatedRoute: ActivatedRoute,
    private profesorService: ProfesoresService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.imagen = parametros.get('imagen')
      console.log(parametros)
      this.id = parseInt(parametros.get('id') || '0');
      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        apellido: new FormControl(parametros.get('apellido')),
        curso: new FormControl(parametros.get('curso')),
        inscripcionAbierta: new FormControl(parametros.get('inscripcionAbierta'))
      });
    })
  }

  editarProfesor() {
    let p: Profesor = {
      id: this.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      curso: this.formulario.value.curso,
      imagen: this.imagen
    }

    this.profesorService.editarProfesor(p);

    this.router.navigate(['profesores/listar'])
  }
  

}
