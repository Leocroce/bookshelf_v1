import { TestBed } from '@angular/core/testing';

import { ServicoDadosService } from './servico-dados.service';

describe('ServicoDadosService', () => {
  let service: ServicoDadosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicoDadosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
