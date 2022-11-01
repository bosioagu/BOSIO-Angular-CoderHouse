import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from 'src/app/core/guards/admin.guard';
import { AutenticacionGuard } from 'src/app/core/guards/autenticacion.guard';
import { AgregarProfesorComponent } from './components/agregar-profesor/agregar-profesor.component';
import { EditarProfesorComponent } from './components/editar-profesor/editar-profesor.component';
import { ListaProfesorComponent } from './components/lista-profesor/lista-profesor.component';
import { ProfesoresInicioComponent } from './components/profesores-inicio/profesores-inicio.component';


const routes: Routes = [
  { path: 'profesores', component: ProfesoresInicioComponent,canActivateChild:[AutenticacionGuard], children: [
    { path: 'listar', component: ListaProfesorComponent },
    { path: 'editar', component: EditarProfesorComponent, canActivate: [AdminGuard]  },
    { path: 'agregar', component: AgregarProfesorComponent, canActivate: [AdminGuard]  }
  ]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesoresRoutingModule { }
