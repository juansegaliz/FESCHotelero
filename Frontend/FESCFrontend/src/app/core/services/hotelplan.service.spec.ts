import { TestBed } from '@angular/core/testing';

import { HotelplanService } from './hotelplan.service';

describe('HotelplanService', () => {
  let service: HotelplanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HotelplanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
