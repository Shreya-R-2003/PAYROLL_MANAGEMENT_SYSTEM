import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayscheduleComponent } from './payschedule.component';

describe('PayscheduleComponent', () => {
  let component: PayscheduleComponent;
  let fixture: ComponentFixture<PayscheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PayscheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayscheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
