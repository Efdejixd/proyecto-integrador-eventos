# Correspondencia con el Proyecto Integrador

## Problema
Centralizar la publicación de eventos, venta/reserva de entradas y gestión administrativa.

## Roles
1. Cliente: registro, inicio de sesión, consulta de eventos, reservas y cancelación.
2. Agente: creación/gestión de eventos y administración de reservas.
3. Administrador: consulta de indicadores y reportes.

## Entidades previstas por el enunciado
Persona, Cliente, Agente, Administrador, Evento, Reserva, País, Departamento y Ciudad.

## Estados
- Evento: Programado, En Boletería, En Vivo, Finalizado, Cancelado.
- Reserva: Reservada, Confirmada, Cancelada.

## Campos implementados
Persona/usuario: identificación, nombre, email, contraseña, dirección, ciudad, teléfonos y rol.
Evento: código, nombre, descripción, teatro, ubicación, fechas, capacidad, precio, observaciones, estado y agente.
Reserva: cliente, evento, fecha, total, entradas, observaciones, estado y motivo de cancelación.

## Arquitectura de esta entrega
Angular 20 con componentes standalone, rutas, servicios, modelos y guards. Los datos están simulados con localStorage para que el frontend funcione sin servidor.

## Pendiente cuando el curso lo exija
Backend/API, PostgreSQL, CRUD completo de catálogos geográficos y reportes SQL detallados por agente, cliente, mes, evento y ciudad.
