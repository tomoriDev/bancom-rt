import { CanActivateFn } from '@angular/router';

export const homeGuard: CanActivateFn = () => {
  const token = sessionStorage.getItem('token');
  return !!token;
};
