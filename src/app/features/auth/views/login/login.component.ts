import { Component } from '@angular/core';
import { LoginPresenter } from './login.presenter';
import {
  EEmailErrorMessages,
  EPasswordErrorMessages,
} from 'src/app/features/auth/core/config/form.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  showPassword = false;

  constructor(public presenter: LoginPresenter) {}

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  getEmailError() {
    const { email } = this.controls;

    if (email.hasError('required')) {
      return EEmailErrorMessages.REQUIRED;
    }

    return email.hasError('email') ? EEmailErrorMessages.INVALID : '';
  }

  getPasswordError() {
    const { password } = this.controls;

    return password.hasError('required') ? EPasswordErrorMessages.REQUIRED : '';
  }

  get controls() {
    return this.presenter.loginForm.controls;
  }
}
