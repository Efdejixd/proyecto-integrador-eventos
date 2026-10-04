import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Login } from './pages/login/login';
import { Registro } from './pages/registro/registro';
import { Eventos } from './pages/eventos/eventos';
import { DetalleEvento } from './pages/detalle-evento/detalle-evento';
import { Reservas } from './pages/reservas/reservas';
import { AgenteEventos } from './pages/agente-eventos/agente-eventos';
import { NuevoEvento } from './pages/nuevo-evento/nuevo-evento';
import { AgenteReservas } from './pages/agente-reservas/agente-reservas';
import { AdminReportes } from './pages/admin-reportes/admin-reportes';
import { NoEncontrado } from './pages/no-encontrado/no-encontrado';
import { clienteGuard, agenteGuard, adminGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path:'', component:Inicio },
  { path:'login', component:Login },
  { path:'registro', component:Registro },
  { path:'eventos', component:Eventos },
  { path:'eventos/:id', component:DetalleEvento },
  { path:'cliente/reservas', component:Reservas, canActivate:[clienteGuard] },
  { path:'agente/eventos', component:AgenteEventos, canActivate:[agenteGuard] },
  { path:'agente/nuevo-evento', component:NuevoEvento, canActivate:[agenteGuard] },
  { path:'agente/reservas', component:AgenteReservas, canActivate:[agenteGuard] },
  { path:'admin/reportes', component:AdminReportes, canActivate:[adminGuard] },
  { path:'**', component:NoEncontrado }
];
