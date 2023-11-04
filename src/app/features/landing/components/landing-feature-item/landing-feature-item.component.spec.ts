import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingFeatureItemComponent } from './landing-feature-item.component';

describe('LandingFeatureItemComponent', () => {
  let component: LandingFeatureItemComponent;
  let fixture: ComponentFixture<LandingFeatureItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingFeatureItemComponent]
    });
    fixture = TestBed.createComponent(LandingFeatureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
