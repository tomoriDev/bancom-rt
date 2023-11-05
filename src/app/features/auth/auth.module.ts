import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';

// Components
import { LoginComponent } from './views/login/login.component';
import { AuthLayoutComponent } from './core/layout/auth-layout/auth-layout.component';
import { CoreComponentsModule } from 'src/app/core/components/core-components.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginPresenter } from './views/login/login.presenter';
import { LoginService } from './services/login.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [LoginComponent, AuthLayoutComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatInputModule,
    MatIconModule,
    MatCheckboxModule,
    MatSnackBarModule,
    CoreComponentsModule,
    ReactiveFormsModule,
  ],
  providers: [LoginPresenter, LoginService],
})
export class AuthModule {}
