import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

// Components
import { LoginComponent } from './views/login/login.component';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';

@NgModule({
  declarations: [LoginComponent, AuthLayoutComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
