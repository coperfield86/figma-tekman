import { TestBed } from '@angular/core/testing';

import { MockSessionService } from './mock-session.service';

describe('MockSessionService', () => {
  let service: MockSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
