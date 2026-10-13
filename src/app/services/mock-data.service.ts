import { Injectable } from '@angular/core';
import { Evento, Reserva, Usuario } from '../models/models';

/** Datos simulados del avance Web 1: no requieren backend. */
@Injectable({ providedIn: 'root' })
export class MockDataService {
  readonly usuarios: Pick<Usuario, 'id'|'nombre'|'email'|'rol'>[] = [
    { id: 1, nombre: 'Cliente Demo', email: 'cliente@eventia.com', rol: 'cliente' },
    { id: 2, nombre: 'Agente Demo', email: 'agente@eventia.com', rol: 'agente' },
    { id: 3, nombre: 'Administrador', email: 'admin@eventia.com', rol: 'administrador' }
  ];
  readonly eventos: Evento[] = [
    { id: 1, codigo: 'EV-001', nombre: 'Festival de Música', descripcion: 'Música en vivo',
      teatro: 'Teatro Municipal', pais: 'Colombia', departamento: 'Valle del Cauca',
      ciudad: 'Tuluá', fechaInicio: '2026-10-20T19:00', fechaFin: '2026-10-20T23:00',
      capacidad: 500, precioBase: 65000, observaciones: 'Apertura 18:00',
      estado: 'En Boletería', agenteId: 2 },
    { id: 2, codigo: 'EV-002', nombre: 'Noche de Comedia', descripcion: 'Comedia regional',
      teatro: 'Auditorio Central', pais: 'Colombia', departamento: 'Valle del Cauca',
      ciudad: 'Tuluá', fechaInicio: '2026-11-05T20:00', fechaFin: '2026-11-05T22:00',
      capacidad: 250, precioBase: 40000, observaciones: 'Mayores de 14 años',
      estado: 'Programado', agenteId: 2 }
  ];
  readonly reservas: Reserva[] = [
    { id: 1, clienteId: 1, eventoId: 1, fecha: '2026-10-12T12:00',
      total: 130000, entradas: 2, observaciones: 'Asientos juntos', estado: 'Confirmada' },
    { id: 2, clienteId: 1, eventoId: 2, fecha: '2026-10-12T15:00',
      total: 40000, entradas: 1, observaciones: '', estado: 'Reservada' }
  ];
}
