import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarycomponentComponent } from './salarycomponent.component';

describe('SalarycomponentComponent', () => {
  let component: SalarycomponentComponent;
  let fixture: ComponentFixture<SalarycomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalarycomponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalarycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
