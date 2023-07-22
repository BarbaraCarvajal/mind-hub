const eventoService = require("../services/eventoService");
const { Evento } = require('../models/Evento');

// Obtener todos los eventos
async function getEventos(req, res) {
    try {
        const verEventos = await eventoService.getEventos();
        res.status(201).json(verEventos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Crear un nuevo evento
async function crearEvento(req, res) {
    try {
        const { name, category, date, description, image, place, price, capacity, assistance } = req.body;

        // Verificar que todos los campos requeridos estén presentes
        if (name && category && date && description && image && place && price && capacity && assistance) {
            // Llamar al servicio para crear el evento
            const eventoCreado = await eventoService.crearEvento(name, category, date, description, image, place, price, capacity, assistance);
            if (eventoCreado) {
                res.status(201).json(eventoCreado);
            } else {
                res.status(400).json({ error: "No se pudo crear el evento :c" });
            }
        } else {
            res.status(400).json({ error: "Data error :c" });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Obtener un evento por su ID
async function getEventosById(req, res) {
    try {
        const eventId = req.params.id;
        const eventoEncontrado = await eventoService.getEventosById(eventId);

        if (!eventoEncontrado) {
            return res.status(404).json({ error: 'El evento no fue encontrado' });
        }

        res.status(201).json(eventoEncontrado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Editar un evento existente
async function editarEvento(req, res) {
    try {
        const eventId = req.params.id;
        const { name, category, date, description, image, place, price, capacity, assistance } = req.body;

        // Crear un objeto con los datos actualizados del evento
        const updatedData = {
            name,
            category,
            date,
            description,
            image,
            place,
            price,
            capacity,
            assistance
        };

        // Llamar al servicio para editar el evento
        const eventoActualizado = await eventoService.editarEvento(eventId, updatedData);
        res.status(201).json(eventoActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Eliminar un evento por su ID
async function eliminarEvento(req, res) {
    try {
        const eventId = req.params.id;
        // Llamar al servicio para eliminar el evento
        await eventoService.eliminarEvento(eventId);
        res.status(201).json({ message: 'Evento eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Actualizar parcialmente un evento por su ID
async function actualizarEventoParcialmente(req, res) {
    try {
        const eventId = req.params.id;
        const actualizaciones = req.body;
        // Llamar al servicio para actualizar parcialmente el evento
        const eventoActualizado = await eventoService.actualizarEventoParcialmente(eventId, actualizaciones);
        res.status(201).json(eventoActualizado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getEventos, crearEvento, getEventosById, editarEvento, eliminarEvento, actualizarEventoParcialmente
};
