const express = require('express');
const { crearNuevoUsuario, getUsuarios, getUsuarioById, editarParcialUsuario, editarUsuario,eliminarUsuario } = require('../controllers/customer.controller');

const router = express.Router();

// Rutas Usuarios
router.get('/usuarios', getUsuarios)
router.post('/usuarios', crearNuevoUsuario)
router.get('/usuarios/:id', getUsuarioById)
router.put('/usuarios/:id', editarUsuario)
router.delete('/usuarios/:id', eliminarUsuario)
router.patch('/usuarios/:id', editarParcialUsuario)

module.exports = router;