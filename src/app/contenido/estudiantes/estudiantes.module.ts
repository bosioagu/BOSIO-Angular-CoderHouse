import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { EstudiantesRoutingModule } from './estudiantes-routing.module';
import { AgregarEstudianteComponent } from './components/agregar-estudiante/agregar-estudiante.component';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { ListarEstudianteComponent } from './components/listar-estudiante/listar-estudiante.component';
import { EstudiantesInicioComponent } from './components/estudiantes-inicio/estudiantes-inicio.component';
import { EstudianteService } from './services/estudiante.service';


@NgModule({
  declarations: [
    AgregarEstudianteComponent,
    EditarEstudianteComponent,
    ListarEstudianteComponent,
    EstudiantesInicioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EstudiantesRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
   EstudianteService
  ]
})
export class EstudiantesModule { }
