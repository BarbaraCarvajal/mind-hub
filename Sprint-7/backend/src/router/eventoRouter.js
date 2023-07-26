const express = require('express');
const { 
    getEventos, crearEvento,getEventosById,editarEvento,eliminarEvento,actualizarEventoParcialmente 
} = require('../controllers/evento.Controller');
const validaciones = require('../middlewares/validaciones');
const { autenticarToken } = require('../middlewares/autenticacion');

const router = express.Router();

//ruta = endpoint /
//es lo q se pide en la peticion -> req (request)
//es lo q se responde            -> res (response)

// Rutas Eventos
router.get('/eventos',autenticarToken, getEventos)
router.post('/eventos',autenticarToken, validaciones.comprobarDatos, crearEvento)
router.get('/eventos/:id', autenticarToken, validaciones.comprobarId, getEventosById)
// router.put('/eventos/:id', validaciones.comprobarId, validaciones.comprobarDatos, editarEvento)
// router.delete('/eventos/:id', validaciones.comprobarId, eliminarEvento)
// router.patch('/eventos/:id',validaciones.comprobarId, actualizarEventoParcialmente)

module.exports = router;