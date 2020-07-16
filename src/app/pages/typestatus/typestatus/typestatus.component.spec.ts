import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypestatusComponent } from './typestatus.component';

describe('TypestatusComponent', () => {
  let component: TypestatusComponent;
  let fixture: ComponentFixture<TypestatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypestatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypestatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
