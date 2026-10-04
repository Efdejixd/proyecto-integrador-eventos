import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
@Component({selector:'app-agente-eventos',standalone:true,imports:[RouterLink],template:`
<section class="wrap"><div class="top"><div><span>PANEL DEL AGENTE</span><h1>Mis eventos</h1></div><a routerLink="/agente/nuevo-evento">+ Nuevo evento</a></div>
<div class="table"><div class="row header"><b>Código</b><b>Evento</b><b>Ciudad</b><b>Estado</b><b>Precio</b></div>@for(e of eventos;track e.id){<div class="row"><span>{{e.codigo}}</span><b>{{e.nombre}}</b><span>{{e.ciudad}}</span><span>{{e.estado}}</span><span>{{dinero(e.precioBase)}}</span></div>}</div><a routerLink="/agente/reservas" class="link">Administrar reservas →</a></section>`,
styles:[`.wrap{max-width:1100px;margin:50px auto;padding:0 20px}.top{display:flex;justify-content:space-between;align-items:center}.top span{color:#6d5dfc;font-weight:900}.top h1{font-size:2.6rem;margin:5px 0 25px}.top a,.link{background:#6d5dfc;color:#fff;text-decoration:none;padding:11px 15px;border-radius:9px}.table{background:#fff;border-radius:14px;overflow:auto;box-shadow:0 8px 25px #0f172a10;margin-bottom:25px}.row{display:grid;grid-template-columns:.7fr 1.6fr 1fr 1fr 1fr;gap:12px;padding:15px;border-bottom:1px solid #e2e8f0;min-width:700px}.header{background:#f8fafc;color:#475569}`]})
export class AgenteEventos {eventos:any[]=[];constructor(private data:DataService,auth:AuthService){this.eventos=data.eventos().filter(e=>e.agenteId===auth.usuario()?.id);}dinero(v:number){return v.toLocaleString('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0});}}
