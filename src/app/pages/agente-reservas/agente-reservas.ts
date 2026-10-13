import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Reserva } from '../../models/models';
@Component({selector:'app-agente-reservas',standalone:true,templateUrl:'./agente-reservas.html',styleUrl:'./agente-reservas.scss'})
export class AgenteReservas {reservas:Reserva[]=[];constructor(private data:DataService,auth:AuthService){const ids=data.eventos().filter(e=>e.agenteId===auth.usuario()?.id).map(e=>e.id);this.reservas=data.reservas().filter(r=>ids.includes(r.eventoId));}cliente(id:number){return this.data.usuarios().find(x=>x.id===id)?.nombre||'Cliente';}evento(id:number){return this.data.eventos().find(x=>x.id===id)?.nombre||'Evento';}dinero(v:number){return v.toLocaleString('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0});}confirmar(r:Reserva){r.estado='Confirmada';this.data.guardarReserva(r);}}
