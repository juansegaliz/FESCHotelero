import { TestBed } from '@angular/core/testing';

import { HttpAirlinesService } from './http-airlines.service';

describe('HttpAirlinesService', () => {
  let service: HttpAirlinesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpAirlinesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
