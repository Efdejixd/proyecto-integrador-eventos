import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
@Component({selector:'app-agente-eventos',standalone:true,imports:[RouterLink],templateUrl:'./agente-eventos.html',styleUrl:'./agente-eventos.scss'})
export class AgenteEventos {eventos:any[]=[];constructor(private data:DataService,auth:AuthService){this.eventos=data.eventos().filter(e=>e.agenteId===auth.usuario()?.id);}dinero(v:number){return v.toLocaleString('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0});}}
