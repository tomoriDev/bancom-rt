import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ILoginForm } from '../../core/interfaces/form.interface';
import { LoginService } from '../../services/login.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import {
  ILoginRequest,
  ILoginResponse,
} from '../../core/interfaces/login.interface';

@Injectable()
export class LoginPresenter {
  loginForm: FormGroup<ILoginForm>;
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.loginForm = this.fb.nonNullable.group({
      email: this.fb.nonNullable.control('', [
        Validators.email,
        Validators.required,
      ]),
      password: this.fb.nonNullable.control('', [Validators.required]),
      rememberEmail: this.fb.control(false),
    });
  }

  register(): void {
    if (!this.loginForm.valid) {
      return;
    }

    this.loading = true;
    const request: ILoginRequest = {
      email: this.loginForm.value.email!,
      password: this.loginForm.value.password!,
    };
    this.loginService.login(request).subscribe({
      next: (value) => this.validateResponse(value),
      complete: () => {
        this.loading = false;
      },
    });
  }

  validateResponse(response: ILoginResponse): void {
    if (!response.success) {
      this.snackBar.open(
        'Credenciales incorrectas. Por favor verifica el usuario e intenta nuevamente! ---> Credenciales: admin@gmail.com | password: 123456',
        'Cerrar',
        {
          horizontalPosition: 'right',
          verticalPosition: 'top',
          duration: 5000,
        }
      );
      return;
    }

    sessionStorage.setItem('token', response.token!);
    this.router.navigate(['/home']);
  }
}
