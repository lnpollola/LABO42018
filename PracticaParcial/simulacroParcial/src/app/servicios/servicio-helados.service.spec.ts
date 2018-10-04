import { TestBed, inject } from '@angular/core/testing';

import { ServicioHeladosService } from './servicio-helados.service';

describe('ServicioHeladosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServicioHeladosService]
    });
  });

  it('should be created', inject([ServicioHeladosService], (service: ServicioHeladosService) => {
    expect(service).toBeTruthy();
  }));
});
