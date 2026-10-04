import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector:'app-navbar', standalone:true, imports:[RouterLink],
  template:`
  <header class="nav">
    <a routerLink="/" class="brand">EVENTIA</a>
    <nav>
      <a routerLink="/eventos">Eventos</a>
      @if (!auth.usuario()) {
        <a routerLink="/login">Ingresar</a><a routerLink="/registro" class="pill">Registrarse</a>
      } @else {
        @if (auth.tieneRol('cliente')) { <a routerLink="/cliente/reservas">Mis reservas</a> }
        @if (auth.tieneRol('agente')) { <a routerLink="/agente/eventos">Gestión</a> }
        @if (auth.tieneRol('administrador')) { <a routerLink="/admin/reportes">Reportes</a> }
        <span class="user">{{auth.usuario()?.nombre}}</span>
        <button (click)="auth.logout()">Salir</button>
      }
    </nav>
  </header>`,
  styles:[`
    .nav{height:68px;padding:0 6%;display:flex;align-items:center;justify-content:space-between;background:#101827;color:#fff;position:sticky;top:0;z-index:10}
    .brand{font-size:1.35rem;font-weight:900;letter-spacing:2px;color:#fff;text-decoration:none}
    nav{display:flex;gap:18px;align-items:center;flex-wrap:wrap} a{color:#e5e7eb;text-decoration:none;font-weight:600}.pill,button{background:#6d5dfc;color:#fff;border:0;border-radius:10px;padding:9px 14px;cursor:pointer}.user{font-size:.88rem;color:#cbd5e1}
    @media(max-width:700px){.nav{height:auto;padding:14px 5%;align-items:flex-start}.user{display:none}nav{gap:10px;font-size:.86rem}}
  `]
})
export class Navbar { constructor(public auth:AuthService){} }
