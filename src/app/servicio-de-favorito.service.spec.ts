import { TestBed } from '@angular/core/testing';

import { ServicioDeFavoritoService } from './servicio-de-favorito.service';

describe('ServicioDeFavoritoService', () => {
  let service: ServicioDeFavoritoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioDeFavoritoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
