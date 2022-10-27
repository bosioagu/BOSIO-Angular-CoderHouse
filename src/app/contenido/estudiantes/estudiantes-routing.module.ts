import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEstudianteComponent } from './components/agregar-estudiante/agregar-estudiante.component';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { EstudiantesInicioComponent } from './components/estudiantes-inicio/estudiantes-inicio.component';
import { ListarEstudianteComponent } from './components/listar-estudiante/listar-estudiante.component';


const routes: Routes = [
  { path: 'estudiantes', component: EstudiantesInicioComponent, children: [
    { path: 'listar', component: ListarEstudianteComponent },
    { path: 'editar', component: EditarEstudianteComponent },
    { path: 'agregar', component: AgregarEstudianteComponent }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
