import { TestBed } from '@angular/core/testing';

import { TypeprojectService } from './typeproject.service';

describe('TypeprojectService', () => {
  let service: TypeprojectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeprojectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
