import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'app-estudiantes-inicio',
  templateUrl: './estudiantes-inicio.component.html',
  styleUrls: ['./estudiantes-inicio.component.css']
})
export class EstudiantesInicioComponent implements OnInit {
  sesion$!: Observable<Sesion>

  constructor(
    private sesionService: SesionService
    ) {
      this.sesion$ = this.sesionService.obtenerSesion()
     }

  ngOnInit(): void {
  }

}
