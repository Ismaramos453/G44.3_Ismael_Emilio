import { TestBed } from '@angular/core/testing';

import { ProductExchangerService } from './product-exchanger.service';

describe('ProductExchangerService', () => {
  let service: ProductExchangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductExchangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
