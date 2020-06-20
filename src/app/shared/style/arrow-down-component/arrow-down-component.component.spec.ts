import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowDownComponentComponent } from './arrow-down-component.component';

describe('ArrowDownComponentComponent', () => {
  let component: ArrowDownComponentComponent;
  let fixture: ComponentFixture<ArrowDownComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowDownComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowDownComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
