// Importar las dependencias necesarias
const jwt = require('jsonwebtoken');
const { Customer } = require('../models/Customer');
const encriptacion = require('bcrypt');

// Clave secreta utilizada para generar y verificar los tokens JWT
const claveSecreta = "claveSuperSecreta123";

// Conjunto para almacenar temporalmente los tokens marcados como no válidos (logout)
const tokenAlmacen = new Set();

// Función para generar un token JWT con la información del usuario
const generarToken = (user) => {
    // Crear el payload con la información del usuario que se desea incluir en el token
    const payload = {
        id: user._id,
        email: user.email
    };

    // Generar el token firmado con el payload y la clave secreta, con una expiración de 2 horas
    const token = jwt.sign(payload, claveSecreta, { expiresIn: '2h' });
    return token;
};

// Función para realizar el proceso de inicio de sesión (login)
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // Buscar al usuario en la base de datos por su dirección de email
        const user = await Customer.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ error: 'Usuario no encontrado' });
        }

        // Verificar si la contraseña proporcionada coincide con la almacenada en la base de datos
        const passwordValido = await encriptacion.compare(password, user.password);
        if (!passwordValido) {
            return res.status(400).json({ error: 'Contraseña incorrecta' });
        }

        // Generar un nuevo token JWT para el usuario autenticado
        const token = generarToken(user);

        // Configurar la cookie del token con las opciones correspondientes
        res.cookie('token', token, { httpOnly: true, maxAge: 4000000, secure: true });

        // Enviar el token en la respuesta
        return res.status(200).json({ token });
    } catch (error) {
        console.error("Error al iniciar sesión:", error); 
        return res.status(500).json({ error: "Error al iniciar sesión..." });
    }
};

// Middleware para autenticar el token en las solicitudes
const autenticarToken = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        res.redirect('/login');
    }
    if (tokenAlmacen.has(token)) {
        res.redirect('/login');
    }
    try{
        const tokenCodificado = jwt.verify(token, claveSecreta);
        if(tokenCodificado){
            next();
        }else{
            res.redirect('/login');
        }
    }catch(error){
        console.error("Error al autenticar el token:", error);
        res.redirect('/login');
    }
};

// Función para marcar un token como no válido (logout)
const logout = (token) => {
    tokenAlmacen.add(token);
};

// Exportar todas las funciones y middlewares del módulo
module.exports = { generarToken, login, autenticarToken, logout };
