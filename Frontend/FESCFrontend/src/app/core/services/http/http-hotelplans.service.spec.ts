import { TestBed } from '@angular/core/testing';

import { HttpHotelplansService } from './http-hotelplans.service';

describe('HttpHotelplansService', () => {
  let service: HttpHotelplansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpHotelplansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
