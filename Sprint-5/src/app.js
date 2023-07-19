const express = require('express');
const connectDB = require('./db');
const Evento = require('./models/evento');

const app = express();

const conectarDB = async () => {
    connectDB();

const EventoCreado = new Evento({
        name: "Fan Viña 2024",
        category: "Party",
        date: "2024-12-02",
        description: "El evento otaku de la V región",
        image: "https://pbs.twimg.com/media/CC44b9JW4AA9wwS.jpg",
        place: "Viña del Mar",
        price: 0,
        capacity: 5000,
        assistance: 5000
    })
    EventoCreado.save()
}

conectarDB();

app.listen(9000,()=>{
    console.log("Server is running on port 9000");
})
