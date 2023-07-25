const express = require('express');
const router = express.Router();
const {inicioSesionUsuario, cerrarSesionUsuario} = require('../controllers/customer.controller');



router.post('/login', inicioSesionUsuario);
router.post('/logout', cerrarSesionUsuario);


module.exports = router;