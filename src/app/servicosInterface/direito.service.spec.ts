import { TestBed } from '@angular/core/testing';
import { DireitoService } from './direito.service';

import { SagasService } from './sagas.service';

describe('DireitoService', () => {
  let service: DireitoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DireitoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
