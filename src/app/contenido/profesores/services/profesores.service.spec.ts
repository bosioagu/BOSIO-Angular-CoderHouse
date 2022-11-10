import { TestBed } from '@angular/core/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing'
import { ProfesoresService } from './profesores.service';
import { of } from 'rxjs';

describe('ProfesoresService', () => {
  let service: ProfesoresService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    httpClientSpy = jasmine.createSpyObj( 'HttpClient', ['get']);
    service = new ProfesoresService(httpClientSpy as any);
  });

  it('Se crea el servicio ProfesoresService', () => {
    expect(service).toBeTruthy();
  });

  it('El servicio devuelve un array de Profesores mockeados', (done: DoneFn) => {
    const mockDatos = [
      {"nombre": "Damien","apellido": "Hirthe", "curso": "Kunze - Walsh", "imagen": "https://www.w3schools.com/howto/img_avatar.png", "id": 1 },
      {"nombre": "Agustin","apellido": "Bosio", "curso": "Ionic", "imagen": "https://www.w3schools.com/howto/img_avatar.png", "id": 2},
      {"nombre": "Anissa", "apellido": "Heathcote", "curso": "Schowalter, Jaskolski and Daugherty", "imagen": "https://www.w3schools.com/howto/img_avatar.png", "id": 3},
      {"nombre": "Hattie", "apellido": "Welch", "curso": "Russel LLC", "imagen": "https://www.w3schools.com/howto/img_avatar.png", "id": 4 }
     ];

     httpClientSpy.get.and.returnValue(of(mockDatos))

     service.obtenerProfesores().subscribe((profesores) => {
      expect(profesores).toEqual(mockDatos);
      done();
     })
  })
});
