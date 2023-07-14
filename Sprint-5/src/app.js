const express = require('express');
const runDB = require('./db');


const app = express();

runDB();

app.listen(4000, () => {
    console.log("Se ha iniciado el servidor en el puerto 3000");
})

