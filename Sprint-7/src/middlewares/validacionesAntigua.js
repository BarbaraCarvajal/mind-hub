

// Verificar que todos los campos requeridos estén presentes 
// en el cuerpo de la solicitud, sirve tanto para PUT como para POST
const comprobarDatos = (req, res, next) => {
    // Extraer los datos del cuerpo de la solicitud
    const { name, category, date, description, image, place, price, capacity, assistance } = req.body;
    // Arreglo para almacenar los mensajes de error
    const errores = [];

    if (!name || typeof name !== 'string') {
        errores.push('El nombre del evento es requerido y debe ser un string');
    }

    if (!category || typeof category !== 'string') {
        errores.push('La categoría del evento es requerida y debe ser un string');
    }

    if (!date || !/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        errores.push('La fecha del evento es requerida y debe estar en formato AAAA-MM-DD');
    }

    if (!description || typeof description !== 'string') {
        errores.push('La descripción del evento es requerida y debe ser un string');
    }

    if (!image || typeof image !== 'string') {
        errores.push('La imagen del evento es requerida y debe ser una URL en formato de string');
    }

    if (!place || typeof place !== 'string') {
        errores.push('El lugar del evento es requerido y debe ser un string');
    }

    if (!price || typeof price !== 'number') {
        errores.push('El precio del evento es requerido y debe ser un número');
    }

    if (!capacity || typeof capacity !== 'number') {
        errores.push('La capacidad del evento es requerida y debe ser un número');
    }

    // Si hay errores, devolver una respuesta de error con los mensajes
    if (errores.length > 0) {
        return res.status(400).json({ errores });
    }

    // Si no hay errores, continuar con el siguiente middleware o controlador
    next();
};


// Verificar que se ingrese un ID válido en la URL
const comprobarId = (req, res, next) => {
    const eventoID = req.params.id;

    // Validar que el ID tenga una longitud válida (24 caracteres)
    if (!eventoID || eventoID.length !== 24) {
        return res.status(400).json({ error: 'El ID es inválido, asegúrese de que tenga 24 caracteres' });
    }

    next();
};

//validacion usuarios

// Esquema de validación para los datos del usuario
const usuarioSchema = Joi.object({
    name: Joi.string().required().messages({
        'string.empty': 'El nombre del usuario es requerido',
        'any.required': 'El nombre del usuario es requerido'
    }),
    password: Joi.string().required().messages({
        'string.empty': 'La contraseña del usuario es requerida',
        'any.required': 'La contraseña del usuario es requerida'
    }),
    email: Joi.string().email().required().messages({
        'string.empty': 'El email del usuario es requerido',
        'any.required': 'El email del usuario es requerido',
        'string.email': 'El email del usuario debe tener un formato válido'
    }),
    rol: Joi.string().required().messages({
        'string.empty': 'El rol del usuario es requerido',
        'any.required': 'El rol del usuario es requerido'
    })
});

// Middleware para verificar que los datos del usuario sean válidos
const comprobarDatosUsuario = (req, res, next) => {
    // Extraer los datos del cuerpo de la solicitud
    const { name, password, email, rol } = req.body;

    // Validar los datos del usuario utilizando el esquema definido
    const { error } = usuarioSchema.validate({ name, password, email, rol }, { abortEarly: false });

    // Si hay un error de validación, se extraen los mensajes de error y se envía una respuesta de error
    if (error) {
        const errores = error.details.map((detail) => detail.message);
        return res.status(400).json({ errores });
    }
    // Si no hay errores, continuar con el siguiente middleware o controlador
    next();
};


// Exportar la función comprobarDatos para que pueda ser utilizada en otros archivos
module.exports = {comprobarDatos, comprobarId, comprobarDatosUsuario};

