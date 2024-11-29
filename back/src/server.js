const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const path = require('path');
const session = require('express-session');

// Importar las rutas de autenticación
const authRoutes = require('./routes/authRoutes');
const personajesRoutes = require('./routes/personajes');
const nacionesRoutes = require('./routes/naciones');
const elementosRoutes = require('./routes/elementos');
const reaccionesRoutes = require('./routes/reacciones');

// Inicializar app
const app = express();

// Conexión a MongoDB
connectDB();

// Configuración de express-session
app.use(session({
  secret: process.env.SESSION_SECRET, // Cambia esto por una cadena secreta única
  resave: false, // No guarda la sesión si no hay cambios
  saveUninitialized: false, // No guarda sesiones vacías
  cookie: { secure: false } // Cambiar a true si usas HTTPS
}));

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

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Rutas del servidor (simplificadas para solo probar la sesión)
app.post('/api/auth/logout', (req, res) => {
  req.session.destroy((err) => {
      if (err) {
          return res.status(500).json({ message: 'Error al cerrar sesión' });
      }
      res.status(200).json({ message: 'Sesión cerrada correctamente' });
  });
});

app.get('/api/auth/status', (req, res) => {
  if (req.session && req.session.user) {
      res.status(200).json({ loggedIn: true, user: req.session.user });
  } else {
      res.status(200).json({ loggedIn: false });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
