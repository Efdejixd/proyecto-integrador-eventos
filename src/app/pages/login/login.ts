import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({selector:'app-login',standalone:true,imports:[FormsModule,RouterLink],templateUrl:'./login.html',styleUrl:'./login.scss'})
export class Login {email='';password='';error='';constructor(private auth:AuthService,private router:Router){} entrar(){if(!this.auth.login(this.email,this.password)){this.error='Correo o contraseña incorrectos.';return;}const r=this.auth.usuario()?.rol;this.router.navigate([r==='agente'?'/agente/eventos':r==='administrador'?'/admin/reportes':'/eventos']);}}
