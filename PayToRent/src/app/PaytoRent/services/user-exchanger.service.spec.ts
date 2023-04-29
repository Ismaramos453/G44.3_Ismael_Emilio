import { TestBed } from '@angular/core/testing';

import { UserExchangerService } from './user-exchanger.service';

describe('UserExchangerService', () => {
  let service: UserExchangerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserExchangerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
