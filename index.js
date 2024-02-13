// Importar conexcion a BBDD
const connection = require("./database/connection")

// Importar dependencias
const express = require ("express");
const cors = require("cors");
const {connect} = require("mongoose");

// Mensaje bienvenida
console.log("API REST con Node para la app de musica arancada!");

// Ejecutar conexion a BBDD
connection();

// Crear servidor Node
const app = express();
const port = 3911;

// Configurar Cors
app.use(cors());

// Convertir datos del body a objetos
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Cargar configuracion de rutas
const UserRoutes = require("./routes/user");
const ArtistRoutes = require("./routes/artist");
const AlbumRoutes = require("./routes/album");
const SongRoutes = require("./routes/song");

app.use("/api/user", UserRoutes);
app.use("/api/artist", ArtistRoutes);
app.use("/api/album", AlbumRoutes);
app.use("/api/song", SongRoutes);



// Rutas de prueba
app.get("/ruta-probando", (req, res) =>{
    return res.status(200).send({
        "id": 12,
        "nombre": "Juan",
        "apellido": "Martinez"
    })
})

// Poner servidor a escuchar peticiones
app.listen(port, () => {
    console.log("Servido Node escuchando en el puerto: " + port)
})
