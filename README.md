# 🛒 Swagger-CRUD-SUPERMERCADO

Este proyecto es una **API REST** para la gestión de un supermercado, implementada con **Node.js**, **Express**, **Sequelize** y **MySQL**, documentada con **Swagger UI**.  

Permite gestionar **productos**, **clientes** y **proveedores** con operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

---

## 🚀 Tecnologías utilizadas
- **Node.js** — entorno de ejecución de JavaScript  
- **Express** — framework web para construir APIs  
- **Sequelize** — ORM para manejar la base de datos MySQL  
- **MySQL** — base de datos relacional  
- **Swagger UI** — documentación interactiva de la API  

---

## 📌 Endpoints principales  

### 📦 Productos  
- `GET /productos` → Listar productos  
- `POST /productos` → Crear producto  
- `GET /productos/{id}` → Obtener producto por ID  
- `PUT /productos/{id}` → Actualizar producto  
- `DELETE /productos/{id}` → Eliminar producto  

### 👥 Clientes  
- `GET /clientes` → Listar clientes  
- `POST /clientes` → Crear cliente  
- `GET /clientes/{id}` → Obtener cliente por ID  
- `PUT /clientes/{id}` → Actualizar cliente  
- `DELETE /clientes/{id}` → Eliminar cliente  

### 🚚 Proveedores  
- `GET /proveedores` → Listar proveedores  
- `POST /proveedores` → Crear proveedor  
- `GET /proveedores/{id}` → Obtener proveedor por ID  
- `PUT /proveedores/{id}` → Actualizar proveedor  
- `DELETE /proveedores/{id}` → Eliminar proveedor  

## ⚙️ Acceder a la API:

API → http://localhost:3000

Swagger UI → http://localhost:3000/api-docs

---

## ⚙️ Instalación y ejecución

### 1️⃣ Clonar repositorio:
```bash
git clone https://github.com/SrAlucart/Swagger-CRUD-SUPERMERCADO.git
cd Swagger-CRUD-SUPERMERCADO
