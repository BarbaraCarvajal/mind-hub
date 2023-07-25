const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const eventoSchema = new Schema({
    name: { 
        type: String, 
        required: true 
    },
    category: { 
        type: String, 
        required: true 
    },
    date: { 
        type: Date, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    image: { 
        type: String, 
        required: true 
    },
    place: { 
        type: String, 
        required: true 
    },
    price: { 
        type: Number, 
        required: true 
    },
    capacity: { 
        type: Number, 
        required: true 
    },
    assistance: { 
        type: Number 
    } ,
    estimate: {
        type: Number
    }
});

// algunos métodos

eventoSchema.methods.getDate = () => this.date.toLocaleDateString()

eventoSchema.methods.cambiarNombre = (nuevoNombre) => this.name = nuevoNombre


const Evento = mongoose.model('Evento', eventoSchema);

//module.exports = Evento

module.exports = { Evento };