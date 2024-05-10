import { TestBed } from '@angular/core/testing';

import { HttpAgenciesService } from './http-agencies.service';

describe('HttpAgenciesService', () => {
  let service: HttpAgenciesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAgenciesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
