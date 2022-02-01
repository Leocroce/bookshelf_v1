import { TestBed } from '@angular/core/testing';

import { MaisVendidosService } from './maisVendidos.service';

describe('MaisVendidosService', () => {
  let service: MaisVendidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MaisVendidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
