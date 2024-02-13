// Importar Mongoose
const mongoose = require ("mongoose");

// Metodo de conexion
const connection = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/app_musica");
        console.log("Conectado correctamente a la BBDD: app_musica")
    }catch (error){
        console.log(error);
        throw new error ("No se ha podido establecer la conexión a la BBDD");
    }
}
// Exportar conexion
module.exports = connection;