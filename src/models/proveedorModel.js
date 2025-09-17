const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db'); // Importa la instancia de Sequelize

// Definición del modelo Proveedor
const Proveedor = sequelize.define("Proveedor", {
  id_proveedor: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  telefono: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  direccion: {
    type: DataTypes.TEXT,
    allowNull: true,
  }
}, {
  tableName: "proveedores",
  timestamps: false,
});

module.exports = Proveedor;
