import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('Pruebas unitarias Login', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Se crea componente Login', () => {
    expect(component).toBeTruthy();
  });

  it('Formulario invalido cuando ingreso solo el usuario', () => {
    const formulario = component.formulario;
    const usuario = formulario.controls['usuario'];
    
    usuario.setValue('Agustin');

    expect(formulario.valid).toBeFalse();
  })

  it('Formulario invalido cuando ingreso solo la contraseña', () => {
    const formulario = component.formulario;
    const usuario = formulario.controls['contrasena'];
    
    usuario.setValue('123ABC');

    expect(formulario.valid).toBeFalse();
  })

});
