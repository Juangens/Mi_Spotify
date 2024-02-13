// Importar dependencias
const express = require("express");

// Cargar Router
const router = express.Router();

// Importar controlador
const AlbumController = require("../controllers/album");

// Definir Rutas
router.get("/prueba", AlbumController.prueba);

// Exportar router
module.exports = router;