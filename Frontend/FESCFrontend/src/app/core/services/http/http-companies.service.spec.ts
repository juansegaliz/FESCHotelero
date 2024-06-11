import { TestBed } from '@angular/core/testing';

import { HttpCompaniesService } from './http-companies.service';

describe('HttpCompaniesService', () => {
  let service: HttpCompaniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCompaniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
