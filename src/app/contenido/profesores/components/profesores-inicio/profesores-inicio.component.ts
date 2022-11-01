import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SesionService } from 'src/app/core/services/sesion.service';
import { Sesion } from 'src/app/models/sesion';

@Component({
  selector: 'app-profesores-inicio',
  templateUrl: './profesores-inicio.component.html',
  styleUrls: ['./profesores-inicio.component.css']
})
export class ProfesoresInicioComponent implements OnInit {
  sesion$!: Observable<Sesion>

  constructor(
    private sesionService: SesionService
  ) { 
    this.sesion$ = this.sesionService.obtenerSesion()
  }
  ngOnInit(): void {
  }

}
