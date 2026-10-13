# Proyecto Integrador: Plataforma Web para la Gestión de Eventos y Reservas

Proyecto Angular 20 desarrollado a partir del avance anterior y adaptado a los requisitos de **Web 1** y **Bases de Datos**.

## Tecnologías
- Angular 20 y TypeScript
- HTML5 y SCSS por componente
- Bootstrap 5
- Angular Router
- Datos simulados (`MockDataService`)

## Ejecutar en Linux Mint / Visual Studio Code
Requiere Node.js y npm compatibles con Angular 20.

```bash
npm install
npm start
```

Abrir http://localhost:4200

## Rutas principales
- `/login` y `/registro`: autenticación visual
- `/eventos` y `/eventos/:id`: catálogo y detalle
- `/cliente/reservas`: reservas del cliente
- `/agente/nuevo-evento`: formulario de evento
- `/agente/eventos`: eventos del agente
- `/agente/reservas`: administración de reservas
- `/admin/reportes`: reportes y gráficas

## Datos de demostración
El servicio `src/app/services/mock-data.service.ts` contiene datos simulados para la presentación. Se mantiene la demostración local del avance anterior en otros servicios; **no es autenticación segura ni backend real**.

Cuentas del prototipo anterior: `cliente@eventia.com`, `agente@eventia.com`, `admin@eventia.com`; clave de prueba `123456`. No usar estas credenciales en producción.

## Bases de Datos
En `documentacion/bases-de-datos/` se encuentran:
- `Modelo_Entidad_Relacion.drawio`
- `Esquema_Relacional.drawio`
- `Diagramas_Bases_de_Datos.pdf`
- `esquema.sql` (referencia opcional; no se conecta a Angular)

Los diagramas `.drawio` pueden abrirse y editarse en https://app.diagrams.net/.

## Entrega y commits
```bash
git add .
git commit -m "feat: adaptar frontend Angular y documentar modelos de datos"
git push origin main
```
Verificar el estándar de mensajes de commit específico acordado en clase, ya que los PDF no detallan su sintaxis.

**Nota:** este avance no requiere conexión real con bases de datos, APIs ni backend.
