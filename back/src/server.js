const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');

const personajesRoutes = require('./routes/personajes');
const nacionesRoutes = require('./routes/naciones');
const elementosRoutes = require('./routes/elementos');
const reaccionesRoutes = require('./routes/reacciones');

// Inicializar app
const app = express();

// Conexión a MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Ruta base para verificar que el servidor responde correctamente
app.get('/', (req, res) => {
    res.send('Servidor backend funcionando correctamente');
});

// Rutas para servir imágenes
app.use('/images/personajes', express.static(path.join(__dirname, 'public/images/personajes')));
app.use('/images/naciones', express.static(path.join(__dirname, 'public/images/naciones')));
app.use('/images/elementos', express.static(path.join(__dirname, 'public/images/elementos')));

// Rutas de la API
app.use('/api/personajes', personajesRoutes);
app.use('/api/naciones', nacionesRoutes);
app.use('/api/elementos', elementosRoutes);
app.use('/api/reacciones', reaccionesRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});