// Importar dependencias
const express = require("express");

// Cargar Router
const router = express.Router();

// Importar controlador
const UserController = require("../controllers/users");

// Definir Rutas
router.get("/prueba", UserController.prueba);

// Exportar router
module.exports = router;