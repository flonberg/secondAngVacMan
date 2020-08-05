import { TestBed } from '@angular/core/testing';

import { FiveDayCalService } from './five-day-cal.service';

describe('FiveDayCalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiveDayCalService = TestBed.get(FiveDayCalService);
    expect(service).toBeTruthy();
  });
});
