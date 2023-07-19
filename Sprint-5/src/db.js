const mongoose = require('mongoose');

//const uri = "mongodb+srv://barbarita:clave123@cluster0.h6zukoi.mongodb.net/?retryWrites=true&w=majority"
//mongodb://localhost:27017

const uri = "mongodb://127.0.0.1:27017"

const connect = () => {
    mongoose.connect(uri,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        socketTimeoutMS: 30000
    })
    .then(()=>console.log("Connectado a MongoDb"))
    .catch(err=> console.log("error de conexion",err))
}

module.exports = connect