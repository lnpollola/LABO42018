import { TestBed } from '@angular/core/testing';

import { EntidadServiceService } from './entidad-service.service';

describe('EntidadServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntidadServiceService = TestBed.get(EntidadServiceService);
    expect(service).toBeTruthy();
  });
});
