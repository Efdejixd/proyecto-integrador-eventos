export type Rol = 'cliente' | 'agente' | 'administrador';
export type EstadoEvento = 'Programado' | 'En Boletería' | 'En Vivo' | 'Finalizado' | 'Cancelado';
export type EstadoReserva = 'Reservada' | 'Confirmada' | 'Cancelada';

export interface Usuario {
  id: number;
  identificacion: string;
  nombre: string;
  email: string;
  password: string;
  direccion: string;
  ciudad: string;
  telefonos: string[];
  rol: Rol;
  puntos?: number;
  publicidad?: boolean;
  comision?: number;
  experiencia?: number;
  salario?: number;
  horario?: string;
}
export interface Evento {
  id: number;
  codigo: string;
  nombre: string;
  descripcion: string;
  teatro: string;
  pais: string;
  departamento: string;
  ciudad: string;
  fechaInicio: string;
  fechaFin: string;
  capacidad: number;
  precioBase: number;
  observaciones: string;
  estado: EstadoEvento;
  agenteId: number;
}
export interface Reserva {
  id: number;
  clienteId: number;
  eventoId: number;
  fecha: string;
  total: number;
  entradas: number;
  observaciones: string;
  estado: EstadoReserva;
  motivoCancelacion?: string;
}
