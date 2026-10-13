import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
@Component({selector:'app-registro',standalone:true,imports:[FormsModule,RouterLink],templateUrl:'./registro.html',styleUrl:'./registro.scss'})
export class Registro {identificacion='';nombre='';email='';password='';direccion='';ciudad='';telefono='';msg='';constructor(private auth:AuthService,private router:Router){}guardar(){const ok=this.auth.registrar({identificacion:this.identificacion,nombre:this.nombre,email:this.email,password:this.password,direccion:this.direccion,ciudad:this.ciudad,telefonos:[this.telefono]});if(!ok){this.msg='Ese correo ya está registrado.';return;}this.router.navigate(['/login']);}}
