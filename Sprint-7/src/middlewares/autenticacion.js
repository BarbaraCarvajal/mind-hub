const jwt = require('jsonwebtoken');

const claveSecreta = "claveSuperSecreta123";

const generarToken = (payload) =>{
    const token = jwt.sign(payload, claveSecreta);
    return token;
}

module.exports = generarToken;