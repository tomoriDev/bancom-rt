import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './core/layout/home-layout/home-layout.component';
import { PostsComponent } from './views/posts/posts.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';

@NgModule({
  declarations: [HomeLayoutComponent, PostsComponent, HomeNavbarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
})
export class HomeModule {}
