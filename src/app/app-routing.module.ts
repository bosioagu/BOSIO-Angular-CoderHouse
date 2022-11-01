import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './core/components/inicio/inicio.component';
import { PaginaNoEncontradaComponent } from './core/components/pagina-no-encontrada/pagina-no-encontrada.component';
import { AutenticacionGuard } from './core/guards/autenticacion.guard';

const routes: Routes = [
  { path: 'inicio', component: InicioComponent, canActivate: [AutenticacionGuard] },
  //lazyloading 'curso'
  {
    path: 'autenticacion', 
    loadChildren: () =>import('./autenticacion/autenticacion.module').then((m) => m.AutenticacionModule)  
  },
  {
    path: 'cursos', 
    loadChildren: () =>import('./contenido/cursos/cursos.module').then((m) => m.CursosModule),
    canActivate: [AutenticacionGuard]   
  },
  {
    path: 'estudiantes', 
    loadChildren: () =>import('./contenido/estudiantes/estudiantes.module').then((m) => m.EstudiantesModule),
    canLoad: [AutenticacionGuard]  
  },
  {
    path: 'profesores', 
    loadChildren: () =>import('./contenido/profesores/profesores.module').then((m) => m.ProfesoresModule),
    canActivate: [AutenticacionGuard]   
  },

  { path: '', redirectTo: 'inicio', pathMatch: 'full'},
  { path: '**', component: PaginaNoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
