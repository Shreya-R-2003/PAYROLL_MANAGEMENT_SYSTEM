import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpayscheduleComponent } from './editpayschedule.component';

describe('EditpayscheduleComponent', () => {
  let component: EditpayscheduleComponent;
  let fixture: ComponentFixture<EditpayscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditpayscheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditpayscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
