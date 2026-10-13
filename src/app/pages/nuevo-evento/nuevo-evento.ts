import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { EstadoEvento } from '../../models/models';
@Component({selector:'app-nuevo-evento',standalone:true,imports:[FormsModule],templateUrl:'./nuevo-evento.html',styleUrl:'./nuevo-evento.scss'})
export class NuevoEvento {codigo='';nombre='';teatro='';ciudad='Tuluá';departamento='Valle del Cauca';pais='Colombia';fechaInicio='';fechaFin='';capacidad=100;precioBase=30000;estado:EstadoEvento='Programado';descripcion='';observaciones='';constructor(private data:DataService,private auth:AuthService,private router:Router){}guardar(){this.data.guardarEvento({id:Date.now(),codigo:this.codigo,nombre:this.nombre,descripcion:this.descripcion,teatro:this.teatro,pais:this.pais,departamento:this.departamento,ciudad:this.ciudad,fechaInicio:this.fechaInicio,fechaFin:this.fechaFin,capacidad:this.capacidad,precioBase:this.precioBase,observaciones:this.observaciones,estado:this.estado,agenteId:this.auth.usuario()!.id});this.router.navigate(['/agente/eventos']);}}
