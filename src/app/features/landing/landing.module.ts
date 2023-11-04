import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingLayoutComponent } from './core/layout/landing-layout/landing-layout.component';
import { LandingComponent } from './views/landing/landing.component';

@NgModule({
  declarations: [LandingComponent, LandingLayoutComponent],
  imports: [CommonModule, LandingRoutingModule],
})
export class LandingModule {}
