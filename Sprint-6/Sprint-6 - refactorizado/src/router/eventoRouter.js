const express = require('express');
const { 
    getEventos, 
    crearEvento, 
    getEventosById, 
    editarEvento, 
    eliminarEvento,
    actualizarEventoParcialmente 
} 
= require('../controllers/evento.controller');

const router = express.Router();


//ruta = endpoint
//es lo q se pide en la peticion -> req (request)
//es lo q se responde            -> res (response)

router.get('/eventos', getEventos)
router.post('/eventos', crearEvento)
router.get('/eventos/:id', getEventosById)
router.put('/eventos/:id', editarEvento)
router.delete('/eventos/:id', eliminarEvento)
router.patch('/eventos/:id', actualizarEventoParcialmente)


module.exports = router;