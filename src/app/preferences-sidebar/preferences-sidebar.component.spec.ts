import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreferencesSidebarComponent } from './preferences-sidebar.component';

describe('PreferencesSidebarComponent', () => {
  let component: PreferencesSidebarComponent;
  let fixture: ComponentFixture<PreferencesSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PreferencesSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PreferencesSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
