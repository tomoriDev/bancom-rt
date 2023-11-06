import { TestBed, waitForAsync } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { LoginPresenter } from './login.presenter';
import { ILoginResponse } from '../../core/interfaces/login.interface';
import { of } from 'rxjs';

describe('LoginPresenter', () => {
  let loginPresenter: LoginPresenter;
  let loginService: jasmine.SpyObj<LoginService>;
  let snackBar: jasmine.SpyObj<MatSnackBar>;
  let router: jasmine.SpyObj<Router>;

  beforeEach(waitForAsync(() => {
    loginService = jasmine.createSpyObj('LoginService', ['login']);
    snackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
    router = jasmine.createSpyObj('Router', ['navigate']);

    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      providers: [
        LoginPresenter,
        { provide: LoginService, useValue: loginService },
        { provide: MatSnackBar, useValue: snackBar },
        { provide: Router, useValue: router },
      ],
    });

    loginPresenter = TestBed.inject(LoginPresenter);
  }));

  it('#should call loginService.login when register is called with valid form data', () => {
    const fakeResponse = { success: true, token: 'fakeToken' };
    loginService.login.and.returnValue(of(fakeResponse));
    loginPresenter.loginForm.setValue({
      email: 'admin@gmail.com',
      password: '123456',
      rememberEmail: false,
    });

    loginPresenter.register();

    expect(loginService.login).toHaveBeenCalledWith({
      email: 'admin@gmail.com',
      password: '123456',
    });
  });

  describe('when register', () => {
    it('#should not call loginService.login when register is loading', () => {
      loginPresenter.isLoading = true;
      loginPresenter.loginForm.setValue({
        email: 'admin@gmail.com',
        password: '123456',
        rememberEmail: false,
      });

      loginPresenter.register();

      expect(loginService.login).not.toHaveBeenCalled();
    });
    it('#should not call loginService.login when register is called with invalid form data', () => {
      loginPresenter.loginForm.setValue({
        email: 'invalidemail',
        password: '',
        rememberEmail: false,
      });

      loginPresenter.register();

      expect(loginService.login).not.toHaveBeenCalled();
    });

    it('#should display a snack bar message on unsuccessful login', () => {
      const fakeResponse = { success: false } as ILoginResponse;
      loginService.login.and.returnValue(of(fakeResponse));

      loginPresenter.loginForm.setValue({
        email: 'admin@gmail.com',
        password: 'wrongPassword',
        rememberEmail: false,
      });

      loginPresenter.register();

      expect(snackBar.open).toHaveBeenCalled();
    });

    it('#should navigate to "/home" on successful login', () => {
      const fakeResponse = { success: true, token: 'fakeToken' };
      loginService.login.and.returnValue(of(fakeResponse));
      loginPresenter.loginForm.setValue({
        email: 'admin@gmail.com',
        password: '123456',
        rememberEmail: false,
      });

      loginPresenter.register();

      expect(router.navigate).toHaveBeenCalledWith(['/home']);
    });
  });
});
