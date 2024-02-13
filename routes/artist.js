// Importar dependencias
const express = require("express");

// Cargar Router
const router = express.Router();

// Importar controlador
const ArtistController = require("../controllers/artists");

// Definir Rutas
router.get("/prueba", ArtistController.prueba);

// Exportar router
module.exports = router;