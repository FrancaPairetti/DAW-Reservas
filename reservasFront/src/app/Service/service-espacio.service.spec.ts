import { TestBed } from '@angular/core/testing';

import { ServiceEspacioService } from './service-espacio.service';

describe('ServiceEspacioService', () => {
  let service: ServiceEspacioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceEspacioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
