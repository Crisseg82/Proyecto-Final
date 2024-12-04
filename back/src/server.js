const express = require('express');
const cors = require('cors');
const path = require('path');
const session = require('express-session');
const connectDB = require('./config/db');
const MongoStore = require('connect-mongo');
require('dotenv').config();
const app = express();


if (!process.env.MONGODB_URI || !process.env.SESSION_SECRET) {
    console.error('Error: Faltan variables de entorno requeridas (MONGODB_URI o SESSION_SECRET).');
    process.exit(1);
}

connectDB()
    .then(() => console.log('Conexión exitosa a la base de datos'))
    .catch((err) => {
        console.error('Error al conectar a la base de datos:', err.message);
        process.exit(1);
    });



    app.use(
        session({
            secret: process.env.SESSION_SECRET,
            resave: false,
            saveUninitialized: false,
            store: MongoStore.create({
                mongoUrl: process.env.MONGODB_URI,
                collectionName: 'sessions',
            }),
            cookie: {
                secure: process.env.NODE_ENV === 'production',
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24, // 1 día
            },
        })
    );

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/images', express.static(path.join(__dirname, '../public/images'), {
  setHeaders: (res) => res.setHeader('Cache-Control', 'public, max-age=86400'),
}));


app.get('/', (req, res) => {
    res.json({ message: 'Servidor backend funcionando correctamente', status: 'OK' });
});

app.use('/api/personajes', require('./routes/personajes'));
app.use('/api/naciones', require('./routes/naciones'));
app.use('/api/elementos', require('./routes/elementos'));
app.use('/api/reacciones', require('./routes/reacciones'));
app.use('/api/auth', require('./routes/authRoutes'));

app.use((err, req, res, next) => {
    console.error('Error no manejado:', err);
    res.status(500).json({ error: 'Error interno del servidor' });
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
