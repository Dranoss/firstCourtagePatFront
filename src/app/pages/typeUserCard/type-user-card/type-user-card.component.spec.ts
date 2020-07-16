import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeUserCardComponent } from './type-user-card.component';

describe('TypeUserCardComponent', () => {
  let component: TypeUserCardComponent;
  let fixture: ComponentFixture<TypeUserCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeUserCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeUserCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
