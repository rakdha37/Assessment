import { TestBed } from '@angular/core/testing';

import { OccupationAndRattingService } from './occupation-and-ratting.service';

describe('OccupationAndRattingService', () => {
  let service: OccupationAndRattingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OccupationAndRattingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
