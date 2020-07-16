import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeprojectcardComponent } from './typeprojectcard.component';

describe('TypeprojectcardComponent', () => {
  let component: TypeprojectcardComponent;
  let fixture: ComponentFixture<TypeprojectcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeprojectcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeprojectcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
