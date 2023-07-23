const mongoose = require('mongoose');
const { Customer } = require('../models/Customer');

//Crear un nuevo usuario

async function crearUsuario(name, password, email, rol) {
    try {
        let usuario = new Customer({ name, password, email, rol });
        usuario.save();
        return usuario;
    } catch (error) {
        throw new Error(error);
    }
}

//Obtener todos los usuarios

async function getUsuarios() {
    try {
        let usuarios = await Customer.find();
        return usuarios;
    } catch (error) {
        throw new Error(error);
    }
}

//Obtener un usuario por su ID
async function getUsuarioById(userId) {
    try {
        const usuarioEncontrado = await Customer.findById(userId);
        return usuarioEncontrado;
    } catch (error) {
        throw new Error(error.message);
    }
}

//Editar un usuario existente
async function editarUsuario(userId, updatedData) {
    try {
        const usuarioExistente = await Customer.findById(userId);
        if (!usuarioExistente) {
            throw new Error('El usuario no existe');
        }
        Object.assign(usuarioExistente, updatedData);
        await usuarioExistente.save();
        return usuarioExistente;
    }catch (error) {
        throw new Error(error.message);
    }
}

//Eliminar un usuario por su ID
async function eliminarUsuario(userId) {
    try {
        const usuarioExistente = await Customer.findById(userId);
        if (!usuarioExistente) {
            throw new Error('El usuario no existe');
        }
        await Customer.findByIdAndDelete(userId);
        return {message: 'Usuario eliminado correctamente'};
    } catch (error) {
        throw new Error(error.message);
    }
    
}

//Editar parcialmente un usuario existente
async function editarParcialUsuario(userId, updatedData) {
    try {
        const usuarioExistente = await Customer.findById(userId);
        if (!usuarioExistente) {
            throw new Error('El usuario no existe');
        }

        for (const key in updatedData) {
            if (key in usuarioExistente) {
                usuarioExistente[key] = updatedData[key];
            }
        }
        await usuarioExistente.save();
        return usuarioExistente;
    } catch (error) {   
        throw new Error(error.message);
    }
}

module.exports = {
    crearUsuario,
    getUsuarios,
    getUsuarioById,
    editarUsuario,
    eliminarUsuario,
    editarParcialUsuario
}