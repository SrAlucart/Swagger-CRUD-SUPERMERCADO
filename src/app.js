// src/app.js

const express = require("express");
const app = express();
const { connectDB, sequelize } = require("./config/db");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

app.use(express.json());

// Importar rutas
const productRoutes = require("./routes/productRoutes");
const clienteRoutes = require("./routes/clienteRoutes");
const proveedorRoutes = require("./routes/proveedorRoutes");

app.use("/productos", productRoutes);
app.use("/clientes", clienteRoutes);
app.use("/proveedores", proveedorRoutes);

// Configuración de Swagger
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API de Supermercado",
      version: "1.0.0",
      description: "Documentación de la API para la gestión de productos, clientes y proveedores.",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Servidor de desarrollo",
      },
    ],
    components: {
      schemas: {
        Producto: {
          type: "object",
          properties: {
            id_producto: {
              type: "integer",
              description: "ID del producto",
              example: 1,
            },
            nombre: {
              type: "string",
              description: "Nombre del producto",
              example: "Manzanas",
            },
            descripcion: {
              type: "string",
              description: "Descripción del producto",
              example: "Fruta fresca roja",
            },
            precio: {
              type: "number",
              format: "float",
              description: "Precio del producto",
              example: 2.5,
            },
            stock: {
              type: "integer",
              description: "Cantidad disponible en inventario",
              example: 100,
            },
          },
        },
        Cliente: {
          type: "object",
          properties: {
            id_cliente: {
              type: "integer",
              description: "ID del cliente",
              example: 1,
            },
            nombre: {
              type: "string",
              description: "Nombre completo del cliente",
              example: "Juan Pérez",
            },
            email: {
              type: "string",
              description: "Correo electrónico del cliente",
              example: "juan@example.com",
            },
            telefono: {
              type: "string",
              description: "Número de teléfono",
              example: "3001234567",
            },
            direccion: {
              type: "string",
              description: "Dirección del cliente",
              example: "Calle 123, Bogotá",
            },
            fecha_registro: {
              type: "string",
              format: "date-time",
              description: "Fecha de registro del cliente",
              example: "2025-09-16T12:00:00Z",
            },
          },
        },
        Proveedor: {
          type: "object",
          properties: {
            id_proveedor: {
              type: "integer",
              description: "ID del proveedor",
              example: 1,
            },
            nombre: {
              type: "string",
              description: "Nombre del proveedor",
              example: "Proveedor XYZ",
            },
            telefono: {
              type: "string",
              description: "Número de contacto del proveedor",
              example: "6014567890",
            },
            email: {
              type: "string",
              description: "Correo del proveedor",
              example: "contacto@proveedor.com",
            },
            direccion: {
              type: "string",
              description: "Dirección del proveedor",
              example: "Av. Siempre Viva 742",
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"], // aquí documentas con Swagger en las rutas
};

const swaggerSpec = swaggerJsdoc(options);

// Endpoint para ver el JSON de la documentación
app.get("/swagger-json", (req, res) => {
  res.json(swaggerSpec);
});

// Interfaz Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Sincronizar con Sequelize y arrancar servidor
sequelize
  .sync()
  .then(() => {
    connectDB().then(() => {
      app.listen(3000, () => {
        console.log("Servidor corriendo en http://localhost:3000");
        console.log("Swagger en http://localhost:3000/api-docs");
      });
    });
  })
  .catch((error) => {
    console.error(
      "Error al sincronizar modelos o conectar la base de datos:",
      error
    );
    process.exit(1);
  });

module.exports = app;
