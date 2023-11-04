import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingAchievmentItemComponent } from './landing-achievment-item.component';

describe('LandingAchievmentItemComponent', () => {
  let component: LandingAchievmentItemComponent;
  let fixture: ComponentFixture<LandingAchievmentItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingAchievmentItemComponent]
    });
    fixture = TestBed.createComponent(LandingAchievmentItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
