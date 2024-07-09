import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationprofileComponent } from './organizationprofile.component';

describe('OrganizationprofileComponent', () => {
  let component: OrganizationprofileComponent;
  let fixture: ComponentFixture<OrganizationprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrganizationprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganizationprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
