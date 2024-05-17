import { TestBed } from '@angular/core/testing';

import { HttpCountriesService } from './http-countries.service';

describe('HttpCountriesService', () => {
  let service: HttpCountriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCountriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
