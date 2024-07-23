import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCustomFieldComponent } from './employee-custom-field.component';

describe('EmployeeCustomFieldComponent', () => {
  let component: EmployeeCustomFieldComponent;
  let fixture: ComponentFixture<EmployeeCustomFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeCustomFieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCustomFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
