const mongoose = require('mongoose');

const sucursalSchema = new mongoose.Schema({
    nombre: { type: String, required: true },
    direccion: { type: String, required: true },
    telefono: { type: String },
    fecha_creacion: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Sucursal', sucursalSchema);
