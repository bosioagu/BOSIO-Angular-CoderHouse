import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { MaterialModule } from '../../material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';


import { AgregarProfesorComponent } from './components/agregar-profesor/agregar-profesor.component';
import { EditarProfesorComponent } from './components/editar-profesor/editar-profesor.component';
import { ListaProfesorComponent } from './components/lista-profesor/lista-profesor.component';
import { ProfesoresInicioComponent } from './components/profesores-inicio/profesores-inicio.component';
import { ProfesoresService } from './services/profesores.service';
import { ProfesoresRoutingModule } from './profesores-routing.module';


@NgModule({
  declarations: [
    AgregarProfesorComponent,
    EditarProfesorComponent,
    ListaProfesorComponent,
    ProfesoresInicioComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ProfesoresRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [
   ProfesoresService
  ]
})
export class ProfesoresModule { }
