import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginComponent } from './login.component';
import { LoginPresenter } from './login.presenter';
import { ILoginForm } from '../../core/interfaces/form.interface';
import {
  EEmailErrorMessages,
  EPasswordErrorMessages,
} from '../../core/config/form.enum';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let stubPresenter: jasmine.SpyObj<LoginPresenter>;

  beforeEach(() => {
    stubPresenter = jasmine.createSpyObj('LoginPresenter', ['loginForm']);

    component = new LoginComponent(stubPresenter);
  });

  describe('#when togglePasswordVisibility', () => {
    it('#should be change the showPassword to the opposite value', () => {
      component.showPassword = true;

      component.togglePasswordVisibility();

      expect(component.showPassword).toBeFalse();
    });
  });

  describe('#when getEmailError', () => {
    beforeEach(() => {
      stubPresenter.loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
      } as ILoginForm);
    });

    it('#should be return an required error if email control is empty', () => {
      component.showPassword = true;

      const error = component.getEmailError();

      expect(error).toBe(EEmailErrorMessages.REQUIRED);
    });

    it('#should be return an email error if email is invalid', () => {
      stubPresenter.loginForm.controls['email'].patchValue('invalidemail@');
      component.showPassword = true;

      const error = component.getEmailError();

      expect(error).toBe(EEmailErrorMessages.INVALID);
    });

    it('#should be not return an error if field is ok!', () => {
      stubPresenter.loginForm.controls['email'].patchValue('test@gmail.com');
      component.showPassword = true;

      const error = component.getEmailError();

      expect(error).toBe('');
    });
  });

  describe('#when getPasswordError', () => {
    beforeEach(() => {
      stubPresenter.loginForm = new FormGroup({
        password: new FormControl('', Validators.required),
      } as ILoginForm);
    });

    it('#should be return an required error if email control is empty', () => {
      component.showPassword = true;

      const error = component.getPasswordError();

      expect(error).toBe(EPasswordErrorMessages.REQUIRED);
    });

    it('#should be not return an error is there is a password', () => {
      stubPresenter.loginForm.controls['password'].patchValue('*******');
      component.showPassword = true;

      const error = component.getPasswordError();

      expect(error).toBe('');
    });
  });
});
