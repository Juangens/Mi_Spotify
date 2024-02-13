// Importaciones
const validate = require("../helpers/validate")

// acciones prueba
const prueba = (req, res) =>{
    return res.status(200).send ({
        status: "Success",
        message: "Mensaje enviado desde: controllers/user.js"
    })
}

//Registro
const register = (req, res) => {
    // Recoger datos peticion
    let params = req.body;

    // Comprobar que llegan bien
    if (!params.name || !params.nick || !params.email || !params.password){
        return res.status(400).send({
            status: "Error",
            message: "Faltan datos por enviar"
        })
    }

    // Validar datos
    try {
        validate(params);
    } catch (error){
        return res.status(400).send({
            status: "Error",
            message: "validación no superada"
        })
    }

    // Control usuarios duplicados

    // Cifrar la contraseña

    // Crear obeto usuario

    // Guardar usuario en BBDD

    // Limpiar objeto a devolver

    // Devolver resultado

    return res.status(200).json({
        status: "Success",
        message: "Método de registro"
    });
}


module.exports = {
    prueba,
    register
}