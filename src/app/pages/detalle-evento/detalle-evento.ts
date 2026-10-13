import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Evento } from '../../models/models';
@Component({selector:'app-detalle-evento',standalone:true,imports:[FormsModule,RouterLink],templateUrl:'./detalle-evento.html',styleUrl:'./detalle-evento.scss'})
export class DetalleEvento {e?:Evento;entradas=1;msg='';constructor(private route:ActivatedRoute,private data:DataService,public auth:AuthService,private router:Router){this.e=data.eventos().find(x=>x.id===Number(route.snapshot.paramMap.get('id')));}fecha(v:string){return new Date(v).toLocaleString('es-CO');}dinero(v:number){return v.toLocaleString('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0});}reservar(){const u=this.auth.usuario();if(!u||!this.e)return;this.data.guardarReserva({id:Date.now(),clienteId:u.id,eventoId:this.e.id,fecha:new Date().toISOString(),total:this.e.precioBase*this.entradas,entradas:this.entradas,observaciones:'',estado:'Reservada'});this.msg='Reserva creada correctamente.';}}
