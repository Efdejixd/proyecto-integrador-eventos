-- Esquema relacional de referencia (PostgreSQL). No se conecta al frontend.
CREATE TABLE usuario (
 id INTEGER PRIMARY KEY, identificacion VARCHAR(30) UNIQUE NOT NULL,
 nombre VARCHAR(120) NOT NULL, email VARCHAR(160) UNIQUE NOT NULL,
 password VARCHAR(255) NOT NULL, direccion VARCHAR(180), ciudad VARCHAR(90),
 rol VARCHAR(20) NOT NULL CHECK (rol IN ('cliente','agente','administrador'))
);
CREATE TABLE telefono_usuario (
 id INTEGER PRIMARY KEY, usuario_id INTEGER NOT NULL REFERENCES usuario(id),
 numero VARCHAR(30) NOT NULL
);
CREATE TABLE cliente (
 usuario_id INTEGER PRIMARY KEY REFERENCES usuario(id),
 puntos INTEGER DEFAULT 0, publicidad BOOLEAN DEFAULT FALSE
);
CREATE TABLE agente (
 usuario_id INTEGER PRIMARY KEY REFERENCES usuario(id),
 comision NUMERIC(5,2), experiencia INTEGER
);
CREATE TABLE administrador (
 usuario_id INTEGER PRIMARY KEY REFERENCES usuario(id),
 salario NUMERIC(14,2), horario VARCHAR(100)
);
CREATE TABLE evento (
 id INTEGER PRIMARY KEY, codigo VARCHAR(30) UNIQUE NOT NULL,
 nombre VARCHAR(150) NOT NULL, descripcion TEXT, teatro VARCHAR(150),
 pais VARCHAR(90), departamento VARCHAR(90), ciudad VARCHAR(90),
 fecha_inicio TIMESTAMP NOT NULL, fecha_fin TIMESTAMP NOT NULL,
 capacidad INTEGER NOT NULL CHECK (capacidad > 0),
 precio_base NUMERIC(14,2) NOT NULL CHECK (precio_base >= 0),
 observaciones TEXT, estado VARCHAR(30) NOT NULL,
 agente_id INTEGER NOT NULL REFERENCES agente(usuario_id),
 CHECK (fecha_fin > fecha_inicio)
);
CREATE TABLE reserva (
 id INTEGER PRIMARY KEY, cliente_id INTEGER NOT NULL REFERENCES cliente(usuario_id),
 evento_id INTEGER NOT NULL REFERENCES evento(id), fecha TIMESTAMP NOT NULL,
 entradas INTEGER NOT NULL CHECK (entradas > 0),
 total NUMERIC(14,2) NOT NULL CHECK (total >= 0),
 observaciones TEXT, estado VARCHAR(30) NOT NULL, motivo_cancelacion TEXT
);
