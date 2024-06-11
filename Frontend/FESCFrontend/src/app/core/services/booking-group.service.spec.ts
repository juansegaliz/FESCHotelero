import { TestBed } from '@angular/core/testing';

import { BookingGroupService } from './booking-group.service';

describe('BookingGroupService', () => {
  let service: BookingGroupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookingGroupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
