import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './core/layout/home-layout/home-layout.component';
import { PostsComponent } from './views/posts/posts.component';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
