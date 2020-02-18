import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarVMComponent } from './nav-bar-vm.component';

describe('NavBarVMComponent', () => {
  let component: NavBarVMComponent;
  let fixture: ComponentFixture<NavBarVMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarVMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarVMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
