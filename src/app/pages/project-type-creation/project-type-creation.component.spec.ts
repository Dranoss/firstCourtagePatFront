import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTypeCreationComponent } from './project-type-creation.component';

describe('ProjectTypeCreationComponent', () => {
  let component: ProjectTypeCreationComponent;
  let fixture: ComponentFixture<ProjectTypeCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTypeCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTypeCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
