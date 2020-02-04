import { TestBed } from '@angular/core/testing';

import { GenEditService } from './gen-edit.service';

describe('GenEditService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GenEditService = TestBed.get(GenEditService);
    expect(service).toBeTruthy();
  });
});
