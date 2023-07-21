const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const eventoSchema = new Schema({
    name: String,
    category: String,
    date: Date,
    description: String,
    image: String,
    place: String,
    price: Number,
    capacity: Number,
    assistance: Number
})

const Evento = mongoose.model('Evento', eventoSchema);

module.exports = Evento