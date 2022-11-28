import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudiante } from 'src/app/models/estudiante';
import { EstudianteService } from '../../services/estudiante.service';

@Component({
  selector: 'app-editar-estudiante',
  templateUrl: './editar-estudiante.component.html',
  styleUrls: ['./editar-estudiante.component.css']
})
export class EditarEstudianteComponent implements OnInit {

  formulario!: FormGroup;
  estudiante!: Estudiante;
  fileName = '';
  imagen: any = ""

  constructor(
    private activatedRoute: ActivatedRoute,
    private estudianteService: EstudianteService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.imagen = parametros.get('imagen')
      
      this.estudiante = {
        id: parseInt(parametros.get('id') || '0'),
        nombre: parametros.get('nombre') || '',
        apellido: parametros.get('apellido') || '',
        fechaNacimiento: new Date (parametros.get('fechaNacimiento') || ''),
        telefono: parametros.get('telefono') || '',
        documento: parametros.get('documento') || '',
        conocimiento: parametros.get('conocimiento') || '',
        imagen: parametros.get('imagen') || ''
   
      };
      this.formulario = new FormGroup({
        nombre: new FormControl(this.estudiante.nombre, [Validators.required]),
        apellido: new FormControl(this.estudiante.apellido, [Validators.required]),
        fechaNacimiento: new FormControl(this.estudiante.fechaNacimiento, [Validators.required]),
        telefono: new FormControl(this.estudiante.telefono, [Validators.required]),
        documento: new FormControl(this.estudiante.documento, [Validators.required]),
        conocimiento: new FormControl(this.estudiante.conocimiento, [Validators.required]),

      });
    })
  }

  editarEstudiante() {
    let e: Estudiante = {
      id: this.estudiante.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      fechaNacimiento: this.formulario.value.fechaNacimiento,
      telefono: this.formulario.value.telefono,
      documento: this.formulario.value.documento,
      conocimiento: this.formulario.value.conocimiento,
      imagen: this.imagen
    }

    this.estudianteService.editarEstudiante(e);

    this.router.navigate(['estudiantes/listar'])
  }
  

}
