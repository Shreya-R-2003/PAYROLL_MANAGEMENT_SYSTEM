import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularPayrollComponent } from './regular-payroll.component';

describe('RegularPayrollComponent', () => {
  let component: RegularPayrollComponent;
  let fixture: ComponentFixture<RegularPayrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegularPayrollComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularPayrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
