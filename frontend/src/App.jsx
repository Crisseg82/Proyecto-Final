import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './componentes/header/header'
import Footer from './componentes/footer/footer'
import Menu from './componentes/navbar/menu'
import Seccion from './componentes/seccion/seccion'
import Personajes from './componentes/Personajes/Personajes';
import Elementos from './componentes/Elementos/elementos';
import Banners from './componentes/carousel/carousel';
import './App.css'
import Nacion from './componentes/naciones/Naciones';



function App() {
  return (
    <Router>
      <div className='container'>
        <Header />
        <Menu />

        <main>
          <Routes>
            <Route path="/" element={<Seccion />} />
            <Route path="/Personajes" element={<Personajes />} />
            <Route path="/Elementos" element={<Elementos />} />
            <Route path="/Nacion" element={<Nacion />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
