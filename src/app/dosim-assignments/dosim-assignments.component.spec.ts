import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DosimAssignmentsComponent } from './dosim-assignments.component';

describe('DosimAssignmentsComponent', () => {
  let component: DosimAssignmentsComponent;
  let fixture: ComponentFixture<DosimAssignmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DosimAssignmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DosimAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
