// src/controllers/clienteController.js
const Cliente = require("../models/clienteModel");

// Obtener todos los clientes
exports.getAllClientes = async (req, res) => {
  try {
    const clientes = await Cliente.findAll();
    res.json(clientes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener clientes" });
  }
};

// Obtener cliente por ID
exports.getClienteById = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener cliente" });
  }
};

// Crear cliente
exports.createCliente = async (req, res) => {
  try {
    const { nombre, email, telefono, direccion } = req.body;
    if (!nombre || !email) {
      return res.status(400).json({ error: "Nombre y email son obligatorios" });
    }
    const nuevoCliente = await Cliente.create({ nombre, email, telefono, direccion });
    res.status(201).json(nuevoCliente);
  } catch (error) {
    res.status(500).json({ error: "Error al crear cliente" });
  }
};

// Actualizar cliente
exports.updateCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });

    await cliente.update(req.body);
    res.json(cliente);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar cliente" });
  }
};

// Eliminar cliente
exports.deleteCliente = async (req, res) => {
  try {
    const cliente = await Cliente.findByPk(req.params.id);
    if (!cliente) return res.status(404).json({ error: "Cliente no encontrado" });

    await cliente.destroy();
    res.json({ message: "Cliente eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar cliente" });
  }
};
