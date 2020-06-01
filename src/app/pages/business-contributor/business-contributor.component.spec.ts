import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessContributorComponent } from './business-contributor.component';

describe('BusinessContributorComponent', () => {
  let component: BusinessContributorComponent;
  let fixture: ComponentFixture<BusinessContributorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessContributorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessContributorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
