import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InscripcionesRoutingModule } from './inscripciones-routing.module';
import { ListaInscripcionesComponent } from './component/lista-inscripciones/lista-inscripciones.component';
import { SharedModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { InscripcionesEffects } from './state/inscripciones.effects';
import { EditarDialogComponent } from './component/editar-dialog/editar-dialog.component';
import { inscripcionesFeatureKey, reducer } from './state/inscripciones.reducer';
import { StoreModule } from '@ngrx/store';


@NgModule({
  declarations: [
    ListaInscripcionesComponent,
    EditarDialogComponent
  ],
  imports: [
    CommonModule,
    InscripcionesRoutingModule,
    SharedModule,
    StoreModule.forFeature(inscripcionesFeatureKey, reducer),
    EffectsModule.forFeature([InscripcionesEffects])
  ]
})
export class InscripcionesModule { }
