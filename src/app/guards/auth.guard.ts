import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService), router = inject(Router);
  return auth.estaAutenticado() ? true : router.createUrlTree(['/login']);
};
export const clienteGuard: CanActivateFn = () => {
  const auth=inject(AuthService), router=inject(Router);
  return auth.tieneRol('cliente') ? true : router.createUrlTree(['/']);
};
export const agenteGuard: CanActivateFn = () => {
  const auth=inject(AuthService), router=inject(Router);
  return auth.tieneRol('agente') ? true : router.createUrlTree(['/']);
};
export const adminGuard: CanActivateFn = () => {
  const auth=inject(AuthService), router=inject(Router);
  return auth.tieneRol('administrador') ? true : router.createUrlTree(['/']);
};
