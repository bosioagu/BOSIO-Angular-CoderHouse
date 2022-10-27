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
  id!: number;
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
      console.log(parametros)
      this.id = parseInt(parametros.get('id') || '0');
      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        apellido: new FormControl(parametros.get('apellido')),
        fechaNacimiento: new FormControl(parametros.get('fechaNacimiento')),
        telefono: new FormControl(parametros.get('telefono')),
        documento: new FormControl(parametros.get('documento')),
        conocimiento: new FormControl(parametros.get('conocimiento'))
      });
    })
  }

  editarEstudiante() {
    let e: Estudiante = {
      id: this.id,
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
