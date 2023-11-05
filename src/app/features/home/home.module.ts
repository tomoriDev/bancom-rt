import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeLayoutComponent } from './core/layout/home-layout/home-layout.component';
import { UsersComponent } from './views/users/users.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { HomeNavbarComponent } from './components/home-navbar/home-navbar.component';
import { TableExpandableRowsComponent } from './components/table-expandable-rows/table-expandable-rows.component';
import { ManagePostsComponent } from './components/manage-posts/manage-posts.component';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';
import { ManagePostsCreateComponent } from './components/manage-posts-create/manage-posts-create.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { ReactiveFormsModule } from '@angular/forms';
import { UsersHttp } from './core/services/users.http.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HomeLayoutComponent,
    UsersComponent,
    HomeNavbarComponent,
    TableExpandableRowsComponent,
    ManagePostsComponent,
    ManagePostsCreateComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    CoreComponentsModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
  ],
  providers: [UsersHttp],
})
export class HomeModule {}
