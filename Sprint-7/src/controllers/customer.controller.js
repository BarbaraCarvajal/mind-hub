const customerService = require('../services/customerService');
const { Customer } = require('../models/Customer');

//obtener todos los usuarios
async function getUsuarios(req, res) {
    try {
        const verUsuarios = await customerService.getUsuarios();
        res.status(201).json(verUsuarios);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//crear un nuevo usuario
async function crearUsuario(req, res) {
    try{
        const { name, password, email, rol } = req.body;
        
        const usuarioCreado = await customerService.crearUsuario(name, password, email, rol);
        if (usuarioCreado) {
            res.status(201).json(usuarioCreado);
        }else{
            res.status(400).json({ error: "No se pudo crear el usuario :c" });
        }
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

//obtener un usuario por su ID
async function getUsuarioById(req, res) {
    try {
        const userId = req.params.id;
        const usuarioEncontrado = await customerService.getUsuarioById(userId);

        if (!usuarioEncontrado) {
            return res.status(404).json({ error: 'El usuario no fue encontrado' });
        }

        res.status(201).json(usuarioEncontrado);
    } catch (error) {
        res.status(500).json({ error: "Error al encontrar el usuario en nuestra base de datos." });
    }
}

//editar un usuario existente
async function editarUsuario(req, res) {
    try {
        const userId = req.params.id;
        const { name, password, email, rol } = req.body;

        //crear un objeto con los datos actualizados del usuario
        const updatedData = {
            name,
            password,
            email,
            rol
        };

        //llamar al servicio para editar el usuario
        const usuarioActualizado = await customerService.editarUsuario(userId, updatedData);
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//eliminar un usuario por su ID
async function eliminarUsuario(req, res) {
    try {
        const userId = req.params.id;
        await customerService.eliminarUsuario(userId);
        res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//editar parcialmente un usuario existente
async function editarParcialUsuario(req, res) {
    try {
        const userId = req.params.id;
        const actualizaciones = req.body;
        
        const usuarioActualizado = await customerService.editarParcialUsuario(userId, actualizaciones);
        res.status(200).json(usuarioActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { getUsuarios, crearUsuario, getUsuarioById, editarUsuario, eliminarUsuario, editarParcialUsuario };