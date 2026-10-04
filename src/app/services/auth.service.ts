import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { Rol, Usuario } from '../models/models';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private key = 'eventia_sesion';
  constructor(private data: DataService, private router: Router) {}

  login(email:string, password:string): boolean {
    const u = this.data.usuarios().find(x => x.email.toLowerCase() === email.toLowerCase() && x.password === password);
    if (!u) return false;
    localStorage.setItem(this.key, JSON.stringify(u));
    return true;
  }

  registrar(datos: Omit<Usuario,'id'|'rol'>) {
    const usuarios = this.data.usuarios();
    if (usuarios.some(x => x.email.toLowerCase() === datos.email.toLowerCase())) return false;
    const nuevo: Usuario = { ...datos, id: Date.now(), rol:'cliente', puntos:0, publicidad:false };
    this.data.guardarUsuario(nuevo);
    return true;
  }

  usuario(): Usuario | null {
    const raw = localStorage.getItem(this.key);
    return raw ? JSON.parse(raw) : null;
  }
  estaAutenticado() { return !!this.usuario(); }
  tieneRol(...roles: Rol[]) { const u=this.usuario(); return !!u && roles.includes(u.rol); }
  logout() { localStorage.removeItem(this.key); this.router.navigate(['/']); }
}
