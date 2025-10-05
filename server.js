const express = require('express');
const db = require('./data/db');
const sucursalRoutes = require('./routes/sucursalRoutes');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/sucursales', sucursalRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});