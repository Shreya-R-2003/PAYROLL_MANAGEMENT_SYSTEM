import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleaseitdeclarationComponent } from './releaseitdeclaration.component';

describe('ReleaseitdeclarationComponent', () => {
  let component: ReleaseitdeclarationComponent;
  let fixture: ComponentFixture<ReleaseitdeclarationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReleaseitdeclarationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleaseitdeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
