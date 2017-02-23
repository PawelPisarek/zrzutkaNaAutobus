import { TestBed, inject } from '@angular/core/testing';
import { TransportOfferService } from './transport-offer.service';

describe('TransportOfferService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransportOfferService]
    });
  });

  it('should ...', inject([TransportOfferService], (service: TransportOfferService) => {
    expect(service).toBeTruthy();
  }));
});
