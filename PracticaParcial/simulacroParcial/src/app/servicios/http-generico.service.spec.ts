import { TestBed, inject } from '@angular/core/testing';

import { HttpGenericoService } from './http-generico.service';

describe('HttpGenericoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpGenericoService]
    });
  });

  it('should be created', inject([HttpGenericoService], (service: HttpGenericoService) => {
    expect(service).toBeTruthy();
  }));
});
