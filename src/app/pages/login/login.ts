import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({selector:'app-login',standalone:true,imports:[FormsModule,RouterLink],template:`
<div class="auth-card"><h1>Iniciar sesión</h1><p>Accede a tu cuenta de Eventia.</p>
<form (ngSubmit)="entrar()"><label>Correo electrónico</label><input [(ngModel)]="email" name="email" type="email" required placeholder="correo@ejemplo.com">
<label>Contraseña</label><input [(ngModel)]="password" name="password" type="password" required placeholder="••••••">
@if(error){<div class="error">{{error}}</div>}<button>Ingresar</button></form>
<p class="demo"><b>Cuentas de prueba</b><br>cliente@eventia.com · agente@eventia.com · admin@eventia.com<br>Contraseña: 123456</p>
<p>¿No tienes cuenta? <a routerLink="/registro">Regístrate</a></p></div>`,styles:[`:host{display:block;padding:55px 16px}.auth-card{max-width:430px;margin:auto;background:#fff;padding:34px;border-radius:18px;box-shadow:0 15px 50px #0f172a18}label{display:block;font-weight:700;margin:18px 0 7px}input{width:100%;padding:12px;border:1px solid #cbd5e1;border-radius:9px;box-sizing:border-box}button{width:100%;padding:13px;margin-top:20px;background:#6d5dfc;color:#fff;border:0;border-radius:9px;font-weight:800}.error{color:#b91c1c;margin-top:12px}.demo{font-size:.82rem;background:#f1f5f9;padding:12px;border-radius:8px}`]})
export class Login {email='';password='';error='';constructor(private auth:AuthService,private router:Router){} entrar(){if(!this.auth.login(this.email,this.password)){this.error='Correo o contraseña incorrectos.';return;}const r=this.auth.usuario()?.rol;this.router.navigate([r==='agente'?'/agente/eventos':r==='administrador'?'/admin/reportes':'/eventos']);}}
