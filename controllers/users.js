// acciones prueba
const prueba = (req, res) =>{
    return res.status(200).send ({
        status: "Success",
        message: "Mensaje enviado desde: controllers/user.js"
    })
}

module.exports = {
    prueba
}