const { model } = require('mongoose');
const eventoRouter = require('../router/eventoRouter');
const conectarDB = require('../db');
const Evento = require('../models/Evento');

async function getEventos(req,res){

    try {
        const verEventos = await Evento.find()
        res.status(200).json(verEventos)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function crearEvento(req,res){
    
    try {

        const {name, category,date,description, image, place,price,capacity,assistance} = req.body
            console.log(req.body);

        const agregarEventos = new Evento({
            name,category,date,description,image,place,price,capacity,assistance
        })
        await agregarEventos.save()

        res.status(200).json(agregarEventos)

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

async function getEventosById(req, res) {
    try {
        const eventId = req.params.id;

        // Verifica si el evento existe en la base de datos
        const eventoEncontrado = await Evento.findById(eventId);
        if (!eventoEncontrado) {
            return res.status(404).json({ error: 'El evento no fue encontrado' });
        }

        // Si el evento se encontró, devuelve los detalles del evento
        res.status(200).json(eventoEncontrado);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


async function editarEvento(req, res) {
    try {
        const eventId = req.params.id;
        const { name, category, date, description, image, place, price, capacity, assistance } = req.body;

        // Verifica si el evento existe antes de intentar editarlo
        const eventoExistente = await Evento.findById(eventId);
        if (!eventoExistente) {
            return res.status(404).json({ error: 'El evento no existe' });
        }

        // Actualiza los campos del evento existente con los valores proporcionados en el cuerpo de la solicitud
        eventoExistente.name = name;
        eventoExistente.category = category;
        eventoExistente.date = date;
        eventoExistente.description = description;
        eventoExistente.image = image;
        eventoExistente.place = place;
        eventoExistente.price = price;
        eventoExistente.capacity = capacity;
        eventoExistente.assistance = assistance;

        // Guarda el evento actualizado en la base de datos
        await eventoExistente.save();

        res.status(200).json(eventoExistente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function eliminarEvento(req, res) {
    try {
        const eventId = req.params.id;

        // Verifica si el evento existe antes de intentar eliminarlo
        const eventoExistente = await Evento.findById(eventId);
        if (!eventoExistente) {
            return res.status(404).json({ error: 'El evento no existe' });
        }

        // Elimina el evento de la base de datos
        await Evento.findByIdAndDelete(eventId);

        res.status(200).json({ message: 'Evento eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function actualizarEventoParcialmente(req, res) {
    try {
        const eventId = req.params.id;
        const actualizaciones = req.body;

        // Verifica si el evento existe antes de intentar actualizarlo
        const eventoExistente = await Evento.findById(eventId);
        if (!eventoExistente) {
            return res.status(404).json({ error: 'El evento no existe' });
        }

        // Actualiza los campos del evento existente con las actualizaciones proporcionadas en el cuerpo de la solicitud
        Object.assign(eventoExistente, actualizaciones);

        // Guarda el evento actualizado en la base de datos
        await eventoExistente.save();

        res.status(200).json(eventoExistente);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}





module.exports = {
    getEventos, crearEvento, getEventosById, editarEvento, eliminarEvento,actualizarEventoParcialmente
}

