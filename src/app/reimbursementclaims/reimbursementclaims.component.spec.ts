import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReimbursementclaimsComponent } from './reimbursementclaims.component';

describe('ReimbursementclaimsComponent', () => {
  let component: ReimbursementclaimsComponent;
  let fixture: ComponentFixture<ReimbursementclaimsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReimbursementclaimsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReimbursementclaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
