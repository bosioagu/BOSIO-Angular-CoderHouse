import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { selectSesionActiva } from '../../state/sesion.selectors';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  sesion$!: Observable<Sesion>

  constructor( 
    private store: Store<Sesion>
    ) { 
      this.sesion$ = this.store.select(selectSesionActiva)
    }

  ngOnInit(): void {
  }

}
