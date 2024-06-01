import { TestBed } from '@angular/core/testing';

import { HttpCitiesService } from './http-cities.service';

describe('HttpCitiesService', () => {
  let service: HttpCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
