import { TestBed } from '@angular/core/testing';

import { RtoastService } from './rtoast.service';

describe('RtoastService', () => {
  let service: RtoastService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RtoastService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
