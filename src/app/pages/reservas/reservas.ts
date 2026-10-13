import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';
import { Reserva } from '../../models/models';
@Component({selector:'app-reservas',standalone:true,templateUrl:'./reservas.html',styleUrl:'./reservas.scss'})
export class Reservas {reservas:Reserva[]=[];constructor(private data:DataService,private auth:AuthService){this.cargar();}cargar(){this.reservas=this.data.reservas().filter(x=>x.clienteId===this.auth.usuario()?.id);}evento(id:number){return this.data.eventos().find(x=>x.id===id)?.nombre||'Evento';}dinero(v:number){return v.toLocaleString('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0});}cancelar(r:Reserva){r.estado='Cancelada';r.motivoCancelacion='Cancelada por el cliente';this.data.guardarReserva(r);this.cargar();}}
