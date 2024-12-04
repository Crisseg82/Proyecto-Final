import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/header/header';
import Footer from './componentes/footer/footer';
import Menu from './componentes/navbar/menu'; 
import Seccion from './componentes/seccion/seccion';
import Personajes from './componentes/Personajes/Personajes';
import EditarPersonaje from './componentes/Personajes/EditarPersonaje'; // Nueva importación
import Elementos from './componentes/Elementos/elementos';
import Banners from './componentes/carousel/carousel';
import Nacion from './componentes/naciones/Naciones';
import LoginForm from './componentes/../api/LoginForm';     
import LogoutForm from './componentes/../api/LogoutForm'; 
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className='container'>
        <Header />
       
        <Menu user={user} setUser={setUser} />

        <main>
          <Routes>
            <Route path="/" element={<Seccion />} />
            <Route path="/Personajes" element={<Personajes />} />
            <Route path="/Elementos" element={<Elementos />} />
            <Route path="/Nacion" element={<Nacion />} />
            <Route path="/login" element={<LoginForm setUser={setUser} />} />
            {user && <Route path="/logout" element={<LogoutForm setUser={setUser} />} />}
            {/* Nueva ruta para editar personajes */}
            <Route path="/editar-personaje/:id" element={<EditarPersonaje />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
