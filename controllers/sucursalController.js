const Sucursal = require('../models/sucursal');

exports.crearSucursal = async (req, res) => {
    const nuevaSucursal = new Sucursal(req.body);
    try {
        const sucursalGuardada = await nuevaSucursal.save();
        res.status(201).json(sucursalGuardada);
    } catch (error) {
        res.status(400).json({ mensaje: error.message });
    }
};

exports.obtenerSucursales = async (req, res) => {
    try {
        const sucursales = await Sucursal.find();
        res.status(200).json(sucursales);
    } catch (error) {
        res.status(500).json({ mensaje: error.message });
    }
};
