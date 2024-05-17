import { TestBed } from '@angular/core/testing';

import { HttpStatesService } from './http-states.service';

describe('HttpStatesService', () => {
  let service: HttpStatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpStatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
