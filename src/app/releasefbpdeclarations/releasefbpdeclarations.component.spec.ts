import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReleasefbpdeclarationsComponent } from './releasefbpdeclarations.component';

describe('ReleasefbpdeclarationsComponent', () => {
  let component: ReleasefbpdeclarationsComponent;
  let fixture: ComponentFixture<ReleasefbpdeclarationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReleasefbpdeclarationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReleasefbpdeclarationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
