const express = require('express');
const router = express.Router();
const sucursalController = require('../controllers/sucursalController');

router.post('/', sucursalController.crearSucursal);
router.get('/', sucursalController.obtenerSucursales);

module.exports = router;
