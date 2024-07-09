import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorklocationsComponent } from './worklocations.component';

describe('WorklocationsComponent', () => {
  let component: WorklocationsComponent;
  let fixture: ComponentFixture<WorklocationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WorklocationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorklocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
