# Proyecto Integrador — Plataforma Web para la Gestión de Eventos y Reservas

Frontend académico migrado a **Angular 20**. Está diseñado para demostrar navegación, autenticación por roles, gestión de eventos, reservas y dashboard de administración.

## Requisitos
- Node.js 20+
- npm
- Angular CLI 20

## Ejecutar
```bash
npm install
ng serve -o
```

## Usuarios de demostración
- Cliente: `cliente@eventia.com` / `123456`
- Agente: `agente@eventia.com` / `123456`
- Administrador: `admin@eventia.com` / `123456`

## Funciones incluidas
- Registro e inicio de sesión.
- Roles: cliente, agente y administrador.
- Catálogo y detalle de eventos.
- Creación de reservas y cancelación por cliente.
- Panel del agente para crear eventos y confirmar reservas.
- Dashboard del administrador con conteos, ingresos, reservas por evento y cobertura.
- Modelos de Usuario, Evento y Reserva.
- Datos de demostración persistidos en `localStorage`.
- Guards de rutas por rol.
- Diseño responsive con SCSS.

## Importante para la siguiente etapa
Los datos actuales son **mock/localStorage**, como base funcional del frontend. El enunciado académico también contempla CRUD de personas/clientes/agentes/administradores, países/departamentos/ciudades y reportes más amplios. Para una entrega que exija base de datos real, debe conectarse a un backend y PostgreSQL en la etapa correspondiente.

## Rutas principales
- `/`
- `/login`
- `/registro`
- `/eventos`
- `/eventos/:id`
- `/cliente/reservas`
- `/agente/eventos`
- `/agente/nuevo-evento`
- `/agente/reservas`
- `/admin/reportes`
