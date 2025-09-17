# 🛒 Swagger-CRUD-SUPERMERCADO

Este proyecto es una **API REST** para la gestión de un supermercado, implementada con **Node.js**, **Express**, **Sequelize** y **MySQL**, documentada con **Swagger UI**.  

Permite gestionar productos, clientes y proveedores con operaciones CRUD (Crear, Leer, Actualizar y Eliminar).

---

## 🚀 Tecnologías utilizadas
- **Node.js**: entorno de ejecución de JavaScript.  
- **Express**: framework web para construir APIs de forma rápida y sencilla.  
- **Sequelize**: ORM para manejar la base de datos MySQL.  
- **MySQL**: base de datos relacional.  
- **Swagger UI**: documentación interactiva de la API.  

---

## 📂 Estructura del proyecto
Swagger-CRUD-SUPERMERCADO/
│
├── src/
│ ├── config/ # Configuración de base de datos
│ ├── models/ # Modelos Sequelize (Producto, Cliente, Proveedor)
│ ├── controllers/ # Lógica de negocio (CRUDs)
│ ├── routes/ # Rutas de la API
│ ├── app.js # Configuración principal de Express
│ └── swagger.js # Configuración de Swagger
│
├── package.json # Dependencias y scripts
└── README.md # Documentación del proyecto

⚙️ Instalación y ejecución

Clonar el repositorio:

git clone https://github.com/SrAlucart/Swagger-CRUD-SUPERMERCADO.git
cd Swagger-CRUD-SUPERMERCADO


Instalar dependencias:

npm install


Configurar la base de datos en src/config/db.js.

Levantar el servidor:

node src/app.js


(o en desarrollo con nodemon: npx nodemon src/app.js)

Acceder a la API en:

API: http://localhost:3000

Swagger UI: http://localhost:3000/api-docs

📌 Endpoints principales
Productos

GET /productos → Listar productos

POST /productos → Crear producto

GET /productos/{id} → Obtener producto por ID

PUT /productos/{id} → Actualizar producto

DELETE /productos/{id} → Eliminar producto

Clientes

GET /clientes → Listar clientes

POST /clientes → Crear cliente

GET /clientes/{id} → Obtener cliente por ID

PUT /clientes/{id} → Actualizar cliente

DELETE /clientes/{id} → Eliminar cliente

Proveedores

GET /proveedores → Listar proveedores

POST /proveedores → Crear proveedor

GET /proveedores/{id} → Obtener proveedor por ID

PUT /proveedores/{id} → Actualizar proveedor

DELETE /proveedores/{id} → Eliminar proveedor

📖 Documentación con Swagger

Una vez corriendo el servidor, accede a:
👉 http://localhost:3000/api-docs

Ahí podrás probar los endpoints de manera interactiva.

👨‍💻 Autor

Proyecto desarrollado por Emanuel Buriticá Guababe.
