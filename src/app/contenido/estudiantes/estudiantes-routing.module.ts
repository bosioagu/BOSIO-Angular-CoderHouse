import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { AutenticacionGuard } from 'src/app/core/guards/autenticacion.guard';
import { AgregarEstudianteComponent } from './components/agregar-estudiante/agregar-estudiante.component';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { EstudiantesInicioComponent } from './components/estudiantes-inicio/estudiantes-inicio.component';
import { ListarEstudianteComponent } from './components/listar-estudiante/listar-estudiante.component';


const routes: Routes = [
  { path: 'estudiantes', component: EstudiantesInicioComponent,canActivateChild:[AutenticacionGuard], children: [
    { path: 'listar', component: ListarEstudianteComponent },
    { path: 'editar', component: EditarEstudianteComponent, canActivate: [AdminGuard]  },
    { path: 'agregar', component: AgregarEstudianteComponent, canActivate: [AdminGuard]  }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudiantesRoutingModule { }
