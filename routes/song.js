// Importar dependencias
const express = require("express");

// Cargar Router
const router = express.Router();

// Importar controlador
const SongController = require("../controllers/song");

// Definir Rutas
router.get("/prueba", SongController.prueba);

// Exportar router
module.exports = router;