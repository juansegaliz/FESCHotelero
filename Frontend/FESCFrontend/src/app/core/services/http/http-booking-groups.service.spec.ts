import { TestBed } from '@angular/core/testing';

import { HttpBookingGroupsService } from './http-booking-groups.service';

describe('HttpBookingGroupsService', () => {
  let service: HttpBookingGroupsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpBookingGroupsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
