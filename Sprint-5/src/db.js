const mongoose = require('mongoose');

const uri = "mongodb+srv://barbara:clave123@cluster0.v7ee7mm.mongodb.net/?retryWrites=true&w=majority";

const run = () => {
  mongoose.connect(uri)
    .then(() => console.log("Se ha conectado a la base de datos"))
    .catch(e => console.log("Error de conexión", e));
}

module.exports = run;
