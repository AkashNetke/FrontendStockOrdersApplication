import { TestBed } from '@angular/core/testing';

import { TradeDetailServiceService } from './trade-detail-service.service';

describe('TradeDetailServiceService', () => {
  let service: TradeDetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TradeDetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
