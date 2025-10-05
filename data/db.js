const mongoose = require('mongoose');
const mongoDB = 'mongodb://127.0.0.1/gestion-sucursal';

mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', () => {
    console.log('Base de datos conectada.');
});

module.exports = db;
