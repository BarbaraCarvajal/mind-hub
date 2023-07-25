const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerScheema = new Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    rol: {
        type: String,
        require: true
    }

});

const Customer = mongoose.model('Customer', customerScheema);

module.exports = { Customer };