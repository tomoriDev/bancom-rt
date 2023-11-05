import { Injectable } from '@angular/core';
import { Observable, delay, map, of } from 'rxjs';
import {
  ILoginRequest,
  ILoginResponse,
} from '../core/interfaces/login.interface';

@Injectable()
export class LoginService {
  login(request: ILoginRequest): Observable<ILoginResponse> {
    const { email, password } = request;
    const validUser = email === 'admin@gmail.com' && password === '123456';
    const response = validUser
      ? {
          success: true,
          token:
            'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        }
      : {
          success: false,
          token: null,
        };

    return of(response).pipe(delay(3000));
  }
}
