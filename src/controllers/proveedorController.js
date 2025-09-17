// src/controllers/proveedorController.js
const Proveedor = require("../models/proveedorModel");

// Obtener todos
exports.getAllProveedores = async (req, res) => {
  try {
    const proveedores = await Proveedor.findAll();
    res.json(proveedores);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener proveedores" });
  }
};

// Obtener por ID
exports.getProveedorById = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (!proveedor) return res.status(404).json({ error: "Proveedor no encontrado" });
    res.json(proveedor);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener proveedor" });
  }
};

// Crear
exports.createProveedor = async (req, res) => {
  try {
    const { nombre, telefono, email, direccion } = req.body;
    if (!nombre || !email) {
      return res.status(400).json({ error: "Nombre y email son obligatorios" });
    }
    const nuevoProveedor = await Proveedor.create({ nombre, telefono, email, direccion });
    res.status(201).json(nuevoProveedor);
  } catch (error) {
    res.status(500).json({ error: "Error al crear proveedor" });
  }
};

// Actualizar
exports.updateProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (!proveedor) return res.status(404).json({ error: "Proveedor no encontrado" });

    await proveedor.update(req.body);
    res.json(proveedor);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar proveedor" });
  }
};

// Eliminar
exports.deleteProveedor = async (req, res) => {
  try {
    const proveedor = await Proveedor.findByPk(req.params.id);
    if (!proveedor) return res.status(404).json({ error: "Proveedor no encontrado" });

    await proveedor.destroy();
    res.json({ message: "Proveedor eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar proveedor" });
  }
};
