import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { SesionService } from 'src/app/core/services/sesion.service';
import { loadSesionActiva } from 'src/app/core/state/sesion.actions';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formulario: FormGroup

  constructor(
    private sesionService: SesionService,
    private router: Router,
    private store: Store<Sesion>
  ) {
    this.formulario = new FormGroup({
      usuario: new FormControl('agubosio',[Validators.required]),
      contrasena: new FormControl('123456',[Validators.required]),
      admin: new FormControl(true),
      canActivateChild: new FormControl(true),
      canLoad: new FormControl(true),
    })
  }

  ngOnInit(): void {
  }

  login(){
    let u : Usuario = {
      id: 0,
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      admin: this.formulario.value.admin,
      canActivateChild: this.formulario.value.canActivateChild,
      canLoad: this.formulario.value.canLoad,
    }
     this.sesionService.login(u).subscribe((usuario: Usuario) => {
      this.store.dispatch(loadSesionActiva({usuarioActivo: usuario}))
      alert("Bienvenido")
      this.router.navigate(['inicio']);
     });
  
  }

}
