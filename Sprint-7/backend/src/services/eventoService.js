// Importar el modelo Evento desde '../models/Evento'
const { Evento } = require('../models/Evento');

// Obtener todos los eventos
async function getEventos() {
    try {
        // Buscar todos los eventos en la base de datos
        let eventos = await Evento.find();
        return eventos;
    } catch (error) {
        throw new Error(error);
    }
}

// Crear un nuevo evento
async function crearEvento(name, category, date, description, image, place, price, capacity, assistance) {
    try {
        // Crear un nuevo objeto Evento con los datos proporcionados
        let evento = new Evento({ name, category, date, description, image, place, price, capacity, assistance });
        // Guardar el evento en la base de datos
        evento.save();
        return evento;
    } catch (error) {
        throw new Error(error);
    }
}

// Obtener un evento por su ID
async function getEventosById(eventId) {
    try {
        // Buscar el evento en la base de datos por su ID
        const eventoEncontrado = await Evento.findById(eventId);
        return eventoEncontrado;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Editar un evento existente
async function editarEvento(eventId, updatedData) {
    try {
        // Verificar si el evento existe en la base de datos
        const eventoExistente = await Evento.findById(eventId);
        if (!eventoExistente) {
            throw new Error('El evento no existe');
        }

        // Actualizar los campos del evento existente con los datos actualizados
        Object.assign(eventoExistente, updatedData);
        await eventoExistente.save();

        return eventoExistente;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Eliminar un evento por su ID
async function eliminarEvento(eventId) {
    try {
        // Verificar si el evento existe en la base de datos
        const eventoExistente = await Evento.findById(eventId);
        if (!eventoExistente) {
            throw new Error('El evento no existe');
        }

        // Eliminar el evento de la base de datos
        await Evento.findByIdAndDelete(eventId);
        return { message: 'Evento eliminado correctamente' };
    } catch (error) {
        throw new Error(error.message);
    }
}

// Actualizar parcialmente un evento por su ID
async function actualizarEventoParcialmente(eventId, actualizaciones) {
    try {
        // Verificar si el evento existe en la base de datos
        const eventoExistente = await Evento.findById(eventId);
        if (!eventoExistente) {
            throw new Error('El evento no existe');
        }

        // Actualizar los campos del evento existente con las actualizaciones proporcionadas
        for (const key in actualizaciones) {
            if (key in eventoExistente) {
                eventoExistente[key] = actualizaciones[key];
            }
        }

        await eventoExistente.save();
        return eventoExistente;
    } catch (error) {
        throw new Error(error.message);
    }
}

// Exportar todas las funciones del módulo
module.exports = {
    getEventos,
    crearEvento,
    getEventosById,
    editarEvento,
    eliminarEvento,
    actualizarEventoParcialmente
};
