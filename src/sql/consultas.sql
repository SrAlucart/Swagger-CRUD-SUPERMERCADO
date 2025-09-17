CREATE DATABASE supermercado;

USE supermercado;

 CREATE TABLE productos(
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL
);


CREATE TABLE clientes (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    telefono VARCHAR(15),
    direccion TEXT,
    fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE proveedores (
    id_proveedor INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    telefono VARCHAR(15),
    email VARCHAR(100) UNIQUE NOT NULL,
    direccion TEXT
);

 SELECT * FROM productos;
 INSERT INTO productos (nombre, descripcion, precio, stock) VALUES
('Manzanas', 'Manzanas frescas y jugosas', 1.50, 100),
('Bananas', 'Bananas maduras y dulces', 0.75, 150),
('Leche', 'Leche entera de vaca', 0.90, 200),
('Pan', 'Pan integral recién horneado', 2.00, 50),
('Huevos', 'Docena de huevos frescos', 3.00, 80);


 SELECT * FROM clientes;
INSERT INTO clientes (nombre, email, telefono, direccion) VALUES
('Ana Torres', 'ana.torres@example.com', '555-123-4567', 'Calle Falsa 123, Ciudad A'),
('Luis García', 'luis.garcia@example.com', NULL, 'Avenida Siempreviva 742, Ciudad B'),
('Sofía Ramírez', 'sofia.ramirez@example.com', '555-987-6543', 'Bulevar de los Sueños 500, Ciudad C'),
('Diego Sánchez', 'diego.sanchez@example.com', '555-246-8013', 'Plaza Central 1, Ciudad D'),
('María López', 'maria.lopez@example.com', '555-111-2222', 'Carrera 10 #20-30, Ciudad E');



 SELECT * FROM proveedores;
INSERT INTO proveedores (nombre, telefono, email, direccion) VALUES
('Distribuidora El Sol', '555-333-4444', 'contacto@elsol.com', 'Parque Industrial, Nave 10'),
('Alimentos Frescos S.A.', '555-777-8888', 'ventas@alimentosfrescos.net', 'Calle del Mercado 15'),
('Productos del Campo Ltda.', NULL, 'campo@productos.com', 'Carretera Principal, Km 5'),
('Lácteos La Vaquita', '555-222-1111', 'info@lavaquita.es', 'Granja Los Pinos'),
('Embutidos Gourmet', '555-444-5555', 'pedidos@gourmet.org', 'Zona Comercial, Local 25');



