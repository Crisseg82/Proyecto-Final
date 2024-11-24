import './seccion.css'
import { Link } from 'react-router-dom'
import { useState } from "react";
import Banners from '../carousel/carousel';
import Elements from '../../assets/img/ElementosImg.jpg'
import Fondo from '../../assets/img/Fondo3.png'


function seccion() {

    return (

        <section className="seccion">
            <div className='banner-carousel'>
            <Banners />
            </div>
            <div className='info2'>
                <h1>Genshin Impact</h1>
                <p>Embárcate en un viaje a través de Teyvat para encontrar a tu familiar perdido y buscar respuestas de Los Siete, los dioses elementales. Explora cada rincón de este mundo maravilloso, une fuerzas con un amplio repertorio de personajes y revela los muchos misterios ocultos que esconde Teyvat...</p>
                <div className='video'>
                    <iframe  src="https://www.youtube.com/embed/_XwlRU2lrPM?si=_0d2raxbpgifey1Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                

                <strong>〓Mundo abierto, libertad para explorar〓</strong>
                <p>Genshin Impact es un juego de aventuras de mundo abierto, lo que significa que desde que pones el pie en el continente de Teyvat, siempre y cuando midas tu aguante adecuadamente, descubrirás nuevos paisajes, sin importar si atraviesas montañas o cruzas ríos. Ya sea que descubres un Seelie errante o un dispositivo misterioso, siempre habrá algo esperándote. ¿Será una sorpresa grata, o un accidente inesperado?</p>
                
                <Link to="/Personajes" > Personajes </Link>

                <div className='containerhutaocard'>
                    <div className='hutaoimg'>
                        <img src="https://act-webstatic.hoyoverse.com/upload/contentweb/2022/07/19/300df2aed5060579f08d7db601d8710d_4718581764649753850.png" alt="Hu Tao" />

                    </div>
                    <div className='textohutao'>
                        <h3>Hu Tao</h3>
                        <hr />
                        <p>Hu Tao ordena a un espíritu en llamas que ataque, e inflige Daño Pyro en una gran AdE. Al golpear a sus enemigos, Hu Tao regenera Vida en proporción a su Vida Máx. Este efecto solo puede tener lugar contra un máximo de 5 enemigos golpeados.</p>
                    </div>
                </div>


                <strong>〓Interacción elemental, estrategia de combate〓</strong>
                <p>En esta tierra donde los elementos convergen, el mundo está compuesto de siete elementos: Anemo, Electro, Hydro, Pyro, Cryo, Dendro y Geo. Los personajes poseedores de Visiones pueden controlar estos elementos en combate o al explorar. Al combinar Hydro y Pyro se crea la reacción de Vaporización; al combinar Pyro y Electro se crea la reacción de Sobrecarga; y cuando Electro e Hydro se combinan, se produce una reacción de Electrocargado... La clave de la victoria está en utilizar diferentes elementos contra distintos enemigos y así tener el control de la batalla.</p>
                <br />

                <div className='element-section'>
                    <Link to="/Elementos" > Elementos </Link>
                    <img src={Elements} alt="" />
                </div>

                
                <strong>〓Excelente banda sonora en alta definición〓</strong>
                <p>El diseño de Genshin Impact es refrescante y transparente, con animaciones desbordantes en tiempo real, y movimientos de personajes mediante captura de movimiento y ajustes detallados, todo en una presentación con efectos de alta calidad. Durante el transcurso de 24 horas entre el día y la noche, el clima y la música cambiarán dinámicamente. No importa dónde estés, siempre podrás escuchar la música de orquestas de clase mundial: la Orquesta Filarmónica de Londres y la Orquesta Sinfónica de Shanghái.</p>
                

                <img src={Fondo} alt="Imagen fondo" width="100%" />
                <strong>〓¡Unidos en la aventura!〓</strong>
                <p>En tus travesías, también te encontrarás con compañeros de viaje únicos. Reúne al mejor equipo y utiliza materiales recolectados en tu viaje para fortalecer a tus personajes para conquistar la magia y los dominios en los confines del continente. Desde la cima de Jueyun verás el paso de nubes, sol, lluvia y nieve hasta donde alcanza la vista. Pero todavía tienes que reunirte con tu familiar perdido y revelar a verdad detrás de los Dioses Primordiales. ¡Vamos, viajero, la aventura apenas comienza!</p>
            </div>

        </section>
    )
}

export default seccion