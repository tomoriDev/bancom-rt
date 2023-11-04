import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingLayoutComponent } from './core/layout/landing-layout/landing-layout.component';
import { LandingComponent } from './views/landing/landing.component';
import { LandingNavbarComponent } from './components/landing-navbar/landing-navbar.component';
import { LandingFooterComponent } from './components/landing-footer/landing-footer.component';
import { LandingFeatureItemComponent } from './components/landing-feature-item/landing-feature-item.component';
import { LandingAchievmentItemComponent } from './components/landing-achievment-item/landing-achievment-item.component';
import { NgOptimizedImage } from '@angular/common';
@NgModule({
  declarations: [
    LandingComponent,
    LandingLayoutComponent,
    LandingFooterComponent,
    LandingFeatureItemComponent,
    LandingAchievmentItemComponent,
  ],
  imports: [CommonModule, LandingRoutingModule, LandingNavbarComponent],
  providers: [NgOptimizedImage],
})
export class LandingModule {}
