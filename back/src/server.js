const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

const personajesRoutes = require('./routes/personajes');
const nacionesRoutes = require('./routes/naciones');
const elementosRoutes = require('./routes/elementos');

// Inicializar app
const app = express();

// Conexión a MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Rutas
app.use('/api/personajes', personajesRoutes);
app.use('/api/naciones', nacionesRoutes);
app.use('/api/elementos', elementosRoutes);

// Puerto
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
