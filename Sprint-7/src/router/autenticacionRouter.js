const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.post('/login', customerController.inicioSesionUsuario);
router.post('/logout', customerController.cerrarSesionUsuario);


module.exports = router;