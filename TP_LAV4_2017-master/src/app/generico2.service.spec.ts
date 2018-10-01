import { TestBed, inject } from '@angular/core/testing';

import { Generico2Service } from './generico2.service';

describe('Generico2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Generico2Service]
    });
  });

  it('should be created', inject([Generico2Service], (service: Generico2Service) => {
    expect(service).toBeTruthy();
  }));
});
