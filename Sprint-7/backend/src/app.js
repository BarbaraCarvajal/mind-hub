// Importar las dependencias necesarias
const express = require('express');
const connectDB = require('./db');
const eventoRouter = require('./router/eventoRouter');
const customerRouter = require('./router/customerRouter');
const autenticacionRouter = require('./router/autenticacionRouter');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./api-endpoints.json')
const cors = require('cors');

// Crear la instancia de la aplicación Express
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Middleware para parsear los datos de solicitud como JSON
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Conectar a la base de datos
connectDB();

// Asociar las rutas del enrutador 'eventoRouter' y 'customerRouter'a la ruta '/api'
app.use("/api", eventoRouter);
app.use("/api", customerRouter);
app.use("/api", autenticacionRouter);

//http://localhost:9095/api-docs/#/default
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument))

// Iniciar el servidor y escuchar en el puerto 9095
app.listen(9095, () => {
    console.log("Server is running on port 9095");
});
