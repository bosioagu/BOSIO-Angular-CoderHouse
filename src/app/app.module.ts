import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutenticacionModule } from './autenticacion/autenticacion.module';
import { CursosModule } from './contenido/cursos/cursos.module';
import { CoreModule } from './core/core.module';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { SharedModule } from './shared/shared.module';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { EstudiantesModule } from './contenido/estudiantes/estudiantes.module';
import { ProfesoresModule } from './contenido/profesores/profesores.module';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    SidebarComponent,
 
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AutenticacionModule,
    EstudiantesModule,
    ProfesoresModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
