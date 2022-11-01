import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../services/sesion.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sesion$!: Observable<Sesion>

  constructor( private sesionService: SesionService
    ) { 
      this.sesion$ = this.sesionService.obtenerSesion()
    }

  ngOnInit(): void {
  }

}
