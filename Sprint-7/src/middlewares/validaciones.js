const Joi = require('joi');
const { Customer } = require('../models/Customer'); // Importar el modelo de usuario


// Definir el esquema de validación para el objeto Evento
const eventoSchema = Joi.object({
    name: Joi.string().min(3).max(50).required().messages({
        // Mensajes personalizados para el campo 'name'
        'string.base': 'El nombre debe ser un texto.',
        'string.empty': 'El nombre no puede estar vacío.',
        'string.min': 'El nombre debe tener al menos 3 caracteres.',
        'string.max': 'El nombre debe tener como máximo 50 caracteres.',
        'any.required': 'El nombre es un campo requerido.'
    }),
    category: Joi.string().min(3).max(30).required().messages({
        // Mensajes personalizados para el campo 'category'
        'string.base': 'La categoría debe ser un texto.',
        'string.empty': 'La categoría no puede estar vacía.',
        'string.min': 'La categoría debe tener al menos 3 caracteres.',
        'string.max': 'La categoría debe tener como máximo 30 caracteres.',
        'any.required': 'La categoría es un campo requerido.'
    }),
    date: Joi.date().iso().greater('2000-04-20').required().messages({
        // Mensajes personalizados para el campo 'date'
        'date.base': 'La fecha debe ser una fecha válida.',
        'date.format': 'La fecha debe tener el formato AAAA-MM-DD.',
        'any.required': 'La fecha es un campo requerido.'
    }),
    description: Joi.string().min(10).max(100).required().messages({
        // Mensajes personalizados para el campo 'description'
        'string.base': 'La descripción debe ser un texto.',
        'string.empty': 'La descripción no puede estar vacía.',
        'string.min': 'La descripción debe tener al menos {#limit} caracteres.',
        'string.max': 'La descripción debe tener como máximo {#limit} caracteres.',
        'any.required': 'La descripción es un campo requerido.'
    }),
    image: Joi.string().min(10).required().messages({
        // Mensajes personalizados para el campo 'image'
        'string.base': 'La imagen debe ser un texto.',
        'string.empty': 'La imagen no puede estar vacía.',
        'any.required': 'La imagen es un campo requerido.'
    }),
    place: Joi.string().min(3).max(30).required().messages({
        // Mensajes personalizados para el campo 'place'
        'string.base': 'El lugar debe ser un texto.',
        'string.empty': 'El lugar no puede estar vacío.',
        'string.min': 'El lugar debe tener al menos 3 caracteres.',
        'string.max': 'El lugar debe tener como máximo 30 caracteres.',
        'any.required': 'El lugar es un campo requerido.'
    }),
    price: Joi.number().min(0).max(1000000).required().messages({
        // Mensajes personalizados para el campo 'price'
        'number.base': 'El precio debe ser un número.',
        'number.empty': 'El precio no puede estar vacío.',
        'number.min': 'El precio debe ser como mínimo 0.',
        'number.max': 'El precio debe ser como máximo 1000000.',
        'any.required': 'El precio es un campo requerido.'
    }),
    capacity: Joi.number().min(0).max(100000).required().messages({
        // Mensajes personalizados para el campo 'capacity'
        'number.base': 'La capacidad debe ser un número.',
        'number.empty': 'La capacidad no puede estar vacía.',
        'number.min': 'La capacidad debe ser como mínimo 0.',
        'number.max': 'La capacidad debe ser como máximo 100000.',
        'any.required': 'La capacidad es un campo requerido.'
    }),
    assistance: Joi.number().messages({
        // Mensajes personalizados para el campo 'assistance'
        'number.base': 'La asistencia debe ser un número.',
    }),
    estimate: Joi.number().messages({
        // Mensajes personalizados para el campo 'estimate'
        'number.base': 'La estimación debe ser un número.',
    })
}).oxor('assistance', 'estimate');

// Middleware para comprobar los datos enviados en la solicitud
const comprobarDatos = (req, res, next) => {
    let payload = req.body;
    let { assistance, estimate } = req.body;

    // Comprobar si al menos un campo de 'assistance' o 'estimate' está presente
    if (!assistance && !estimate) {
        return res.status(400).json({ error: "Debe ingresar al menos un campo de asistencia o estimación" });
    }

    // Comprobar que solo uno de los campos 'assistance' o 'estimate' está presente
    if (assistance && estimate) {
        return res.status(400).json({ error: "Debe ingresar solo un campo de asistencia o estimación" });
    }

    // Validar el objeto Evento con el esquema definido
    const { error } = eventoSchema.validate(payload, { abortEarly: false });

    // Si hay errores de validación, devolver mensajes de error personalizados
    if (error) {
        const errorMessage = error.details.map((err) => err.message);
        return res.status(400).json({ errors: errorMessage });
    }

    // Si no hay errores de validación, pasar al siguiente middleware
    next();
};



// Esquema de validación para el ID del evento
const idSchema = Joi.string().length(24).hex().required();

// Middleware para verificar que se ingrese un ID válido en la URL
const comprobarId = (req, res, next) => {
    const eventoID = req.params.id;

    // Validar que el ID cumpla con el esquema definido
    const { error } = idSchema.validate(eventoID);

    // Si hay un error de validación, se envía una respuesta de error con un mensaje personalizado
    if (error) {
        return res.status(400).json({ error: 'El ID es inválido, asegúrese de que tenga 24 caracteres hexadecimales' });
    }

    // Si el ID es válido, se pasa al siguiente middleware
    next();
};

// Esquema de validación utilizando Joi para los datos del usuario
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
        'any.required': 'El rol del usuario es requerido',
        'string.base': 'El rol debe ser un texto.'

    })
});

// Middleware para comprobar los datos del usuario antes de guardar en la base de datos
const comprobarDatosUsuario = async (req, res, next) => {
    const { name, password, email, rol } = req.body;

    // Validar los datos del usuario utilizando el esquema definido anteriormente
    const { error } = usuarioSchema.validate({ name, password, email, rol }, { abortEarly: false });

    if (error) {
        // Si hay errores de validación, extraer los mensajes de error y devolverlos en la respuesta
        const errores = error.details.map((detail) => detail.message);
        return res.status(400).json({ errores });
    }

    try {
        // Verificar si ya existe un usuario con el mismo email en la base de datos
        const usuarioExistente = await Customer.findOne({ email });

        if (usuarioExistente) {
            // Si el email ya está registrado, enviar un mensaje de error y rechazar el registro
            return res.status(400).json({ error: 'El email ya está registrado, por favor ingrese otro email' });
        }

        // Si no hay errores y el email es único, continuar con el siguiente middleware o controlador
        next();
    } catch (error) {
        // Si ocurre un error al verificar el email en la base de datos, enviar un mensaje de error
        return res.status(500).json({ error: 'Error al verificar el email en la base de datos' });
    }
};


module.exports = { comprobarDatos, comprobarId, comprobarDatosUsuario };
