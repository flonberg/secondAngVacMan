import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtonmonthComponent } from './protonmonth.component';

describe('ProtonmonthComponent', () => {
  let component: ProtonmonthComponent;
  let fixture: ComponentFixture<ProtonmonthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtonmonthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtonmonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
