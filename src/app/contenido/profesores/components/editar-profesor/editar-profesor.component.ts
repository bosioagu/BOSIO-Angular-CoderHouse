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
  profesor!: Profesor;
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

      this.profesor = {
        id: parseInt(parametros.get('id') || '0'),
        nombre: parametros.get('nombre') || '',
        apellido: parametros.get('apellido') || '',
        curso: parametros.get('curso') || '', 
        imagen: parametros.get('imagen') || ''

      }
      

      this.formulario = new FormGroup({
        nombre: new FormControl(parametros.get('nombre'), [Validators.required]),
        apellido: new FormControl(parametros.get('apellido')),
        curso: new FormControl(parametros.get('curso')),
      });
    })
  }

  editarProfesor() {
    let p: Profesor = {
      id: this.profesor.id,
      nombre: this.formulario.value.nombre,
      apellido: this.formulario.value.apellido,
      curso: this.formulario.value.curso,
      imagen: this.imagen
    }

    this.profesorService.editarProfesor(p);

    this.router.navigate(['profesores/listar'])
  }
  

}
