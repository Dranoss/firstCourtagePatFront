import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoldercardComponent } from './foldercard.component';

describe('FoldercardComponent', () => {
  let component: FoldercardComponent;
  let fixture: ComponentFixture<FoldercardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoldercardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoldercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
