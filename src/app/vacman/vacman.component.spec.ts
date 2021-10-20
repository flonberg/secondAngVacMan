import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacmanComponent } from './vacman.component';

describe('VacmanComponent', () => {
  let component: VacmanComponent;
  let fixture: ComponentFixture<VacmanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacmanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
