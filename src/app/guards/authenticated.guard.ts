import { CanMatchFn } from '@angular/router';

export const authenticatedGuard: CanMatchFn = (route, segments) => {
  return false;
};
