// acciones prueba
const prueba = (req, res) =>{
    return res.status(200).send ({
        status: "Success",
        message: "Mensaje enviado desde: controllers/song.js"
    })
}

module.exports = {
    prueba
}