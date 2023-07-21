const express = require('express');
const connectDB = require('./db');
const eventoRouter = require('./router/eventoRouter');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json());

connectDB();

app.use("/api",eventoRouter)


app.listen(9090,()=>{
    console.log("Server is running on port 9090");
})

