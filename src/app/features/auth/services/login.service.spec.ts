import { fakeAsync, tick } from '@angular/core/testing';
import { LoginService } from './login.service';

describe('LoginService', () => {
  let loginService: LoginService;

  beforeEach(() => {
    loginService = new LoginService();
  });

  it('#should return a successful response for valid credentials', fakeAsync(() => {
    const validRequest = { email: 'admin@gmail.com', password: '123456' };
    let response = null;

    loginService.login(validRequest).subscribe((data) => {
      response = data;
    });
    tick(3000);

    expect(response!.success).toBe(true);
  }));

  it('#should return a successful response for valid credentials', fakeAsync(() => {
    const invalidRequest = {
      email: 'invalidemail',
      password: 'invalidPassword',
    };
    let response = null;

    loginService.login(invalidRequest).subscribe((data) => {
      response = data;
    });
    tick(3000);

    expect(response!.success).toBe(false);
  }));
});
