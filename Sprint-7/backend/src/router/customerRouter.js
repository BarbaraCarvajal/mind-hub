const express = require('express');
const { crearNuevoUsuario, getUsuarios, getUsuarioById, editarParcialUsuario, editarUsuario,eliminarUsuario } = require('../controllers/customer.controller');
const validaciones = require('../middlewares/validaciones');
const router = express.Router();

// Rutas Usuarios
router.get('/usuarios', getUsuarios)
router.post('/usuarios', validaciones.comprobarDatosUsuario, crearNuevoUsuario)
router.get('/usuarios/:id', validaciones.comprobarId, getUsuarioById)
router.put('/usuarios/:id',validaciones.comprobarId, validaciones.comprobarDatosUsuario, editarUsuario)
router.delete('/usuarios/:id', validaciones.comprobarId, eliminarUsuario)
router.patch('/usuarios/:id',validaciones.comprobarId, editarParcialUsuario)

module.exports = router;