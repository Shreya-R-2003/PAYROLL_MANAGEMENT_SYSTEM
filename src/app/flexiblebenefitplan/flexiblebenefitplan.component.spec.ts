import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexiblebenefitplanComponent } from './flexiblebenefitplan.component';

describe('FlexiblebenefitplanComponent', () => {
  let component: FlexiblebenefitplanComponent;
  let fixture: ComponentFixture<FlexiblebenefitplanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlexiblebenefitplanComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlexiblebenefitplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
