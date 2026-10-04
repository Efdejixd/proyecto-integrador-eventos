import { Injectable } from '@angular/core';
import { Evento, Reserva, Usuario } from '../models/models';

@Injectable({ providedIn: 'root' })
export class DataService {
  private usuariosKey = 'eventia_usuarios';
  private eventosKey = 'eventia_eventos';
  private reservasKey = 'eventia_reservas';

  constructor() { this.seed(); }

  private seed() {
    if (!localStorage.getItem(this.usuariosKey)) {
      const usuarios: Usuario[] = [
        { id: 1, identificacion:'1001', nombre:'Cliente Demo', email:'cliente@eventia.com', password:'123456', direccion:'Centro', ciudad:'Tuluá', telefonos:['3001112233'], rol:'cliente', puntos:120, publicidad:true },
        { id: 2, identificacion:'2001', nombre:'Agente Demo', email:'agente@eventia.com', password:'123456', direccion:'La Esperanza', ciudad:'Tuluá', telefonos:['3002223344'], rol:'agente', comision:10, experiencia:3 },
        { id: 3, identificacion:'3001', nombre:'Administrador', email:'admin@eventia.com', password:'123456', direccion:'Centro', ciudad:'Tuluá', telefonos:['3003334455'], rol:'administrador', salario:2500000, horario:'8:00 - 17:00' }
      ];
      this.set(this.usuariosKey, usuarios);
    }
    if (!localStorage.getItem(this.eventosKey)) {
      const eventos: Evento[] = [
        { id:1, codigo:'EV-001', nombre:'Festival de Música', descripcion:'Una noche con artistas y música en vivo.', teatro:'Teatro Municipal', pais:'Colombia', departamento:'Valle del Cauca', ciudad:'Tuluá', fechaInicio:'2026-10-20T19:00', fechaFin:'2026-10-20T23:00', capacidad:500, precioBase:65000, observaciones:'Ingreso desde las 6:00 p. m.', estado:'En Boletería', agenteId:2 },
        { id:2, codigo:'EV-002', nombre:'Noche de Comedia', descripcion:'Presentación de comediantes regionales.', teatro:'Auditorio Central', pais:'Colombia', departamento:'Valle del Cauca', ciudad:'Tuluá', fechaInicio:'2026-11-05T20:00', fechaFin:'2026-11-05T22:00', capacidad:250, precioBase:40000, observaciones:'Evento para mayores de 14 años.', estado:'Programado', agenteId:2 },
        { id:3, codigo:'EV-003', nombre:'Encuentro Cultural', descripcion:'Música, danza y muestras culturales.', teatro:'Centro Cultural', pais:'Colombia', departamento:'Valle del Cauca', ciudad:'Cali', fechaInicio:'2026-11-15T16:00', fechaFin:'2026-11-15T21:00', capacidad:800, precioBase:30000, observaciones:'Evento familiar.', estado:'En Boletería', agenteId:2 }
      ];
      this.set(this.eventosKey, eventos);
    }
    if (!localStorage.getItem(this.reservasKey)) this.set(this.reservasKey, []);
  }

  private get<T>(key:string): T[] { return JSON.parse(localStorage.getItem(key) || '[]'); }
  private set<T>(key:string, value:T[]) { localStorage.setItem(key, JSON.stringify(value)); }

  usuarios() { return this.get<Usuario>(this.usuariosKey); }
  eventos() { return this.get<Evento>(this.eventosKey); }
  reservas() { return this.get<Reserva>(this.reservasKey); }

  guardarUsuario(usuario: Usuario) {
    const data = this.usuarios();
    const i = data.findIndex(x => x.id === usuario.id);
    i >= 0 ? data[i] = usuario : data.push(usuario);
    this.set(this.usuariosKey, data);
  }

  guardarEvento(evento: Evento) {
    const data = this.eventos();
    const i = data.findIndex(x => x.id === evento.id);
    i >= 0 ? data[i] = evento : data.push(evento);
    this.set(this.eventosKey, data);
  }

  eliminarEvento(id:number) {
    this.set(this.eventosKey, this.eventos().filter(x => x.id !== id));
  }

  guardarReserva(reserva: Reserva) {
    const data = this.reservas();
    const i = data.findIndex(x => x.id === reserva.id);
    i >= 0 ? data[i] = reserva : data.push(reserva);
    this.set(this.reservasKey, data);
  }
}
