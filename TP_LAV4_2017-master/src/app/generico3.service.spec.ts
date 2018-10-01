import { TestBed, inject } from '@angular/core/testing';

import { Generico3Service } from './generico3.service';

describe('Generico3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Generico3Service]
    });
  });

  it('should be created', inject([Generico3Service], (service: Generico3Service) => {
    expect(service).toBeTruthy();
  }));
});
