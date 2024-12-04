const express = require('express');
const bcrypt = require('bcrypt');
const Usuario = require('../models/Usuario');

const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', async (req, res) => {
    const { username, password, nombre, apellido, email } = req.body;

    try {
        if (!username || !password || !nombre || !apellido || !email) {
            return res.status(400).json({ message: 'Todos los campos son obligatorios' });
        }

        const existingUser = await Usuario.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'El nombre de usuario ya está en uso' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        
        // Crear el nuevo usuario
        const newUser = new Usuario({
            username,
            password: hashedPassword,
            nombre,
            apellido,
            email
        });

        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).json({ message: 'Hubo un error al registrar al usuario' });
    }
});

// Ruta para iniciar sesión
router.post('/login', async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await Usuario.findOne({ username });
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        // Guardar usuario en la sesión
        req.session.user = {
            id: user._id,
            username: user.username,
            nombre: user.nombre,
        };

        res.status(200).json({ message: 'Inicio de sesión exitoso', user: req.session.user });
    } catch (error) {
        console.error('Error en la autenticación:', error);
        res.status(500).json({ message: 'Error al iniciar sesión' });
    }
});

// Ruta para cerrar sesión
router.post('/logout', (req, res) => {
  req.session.destroy((err) => {
      if (err) {
          return res.status(500).json({ message: 'Error al cerrar sesión' });
      }
      res.status(200).json({ message: 'Sesión cerrada correctamente' });
  });
});



// Ruta para verificar si el usuario está logueado
router.get('/status', (req, res) => {
    if (req.session.user) {
        return res.status(200).json({ loggedIn: true, user: req.session.user });
    }
    return res.status(200).json({ loggedIn: false });
});

module.exports = router;
