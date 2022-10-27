import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantesInicioComponent } from './estudiantes-inicio.component';

describe('EstudiantesInicioComponent', () => {
  let component: EstudiantesInicioComponent;
  let fixture: ComponentFixture<EstudiantesInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantesInicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudiantesInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
