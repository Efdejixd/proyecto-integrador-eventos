import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MockDataService } from '../../services/mock-data.service';
import { Evento } from '../../models/models';
@Component({selector:'app-eventos',standalone:true,imports:[RouterLink],templateUrl:'./eventos.html',styleUrl:'./eventos.scss'})
export class Eventos {eventos:Evento[]=[];constructor(private data:MockDataService){this.eventos=data.eventos.filter(x=>x.estado!=='Cancelado');}fecha(v:string){return new Date(v).toLocaleString('es-CO',{dateStyle:'medium',timeStyle:'short'});}dinero(v:number){return v.toLocaleString('es-CO',{style:'currency',currency:'COP',maximumFractionDigits:0});}}
