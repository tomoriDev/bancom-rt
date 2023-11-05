import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const homeGuard: CanActivateFn = () => {
  const router = inject(Router);

  const token = sessionStorage.getItem('token');
  if (token) {
    return true;
  } else {
    router.navigate(['/']);
    return false;
  }
};
