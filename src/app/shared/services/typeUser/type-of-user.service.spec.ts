import { TestBed } from '@angular/core/testing';

import { TypeOfUserService } from './type-of-user.service';

describe('TypeOfUserService', () => {
  let service: TypeOfUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOfUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
