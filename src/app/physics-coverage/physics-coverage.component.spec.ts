import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysicsCoverageComponent } from './physics-coverage.component';

describe('PhysicsCoverageComponent', () => {
  let component: PhysicsCoverageComponent;
  let fixture: ComponentFixture<PhysicsCoverageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhysicsCoverageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysicsCoverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
