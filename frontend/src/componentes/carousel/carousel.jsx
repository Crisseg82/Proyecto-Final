import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";

function Banners() {
    return (
        <div>
             <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/05/38/2b/05382b8ce21a739bdfab5b62076b2f10.jpg"
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/d1/82/6a/d1826a873709602fa9f0270974451d09.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/8c/99/9c/8c999ce11fca3411e2bcfa592aca9d60.jpg"
          alt="Third slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.pinimg.com/originals/3c/de/0d/3cde0deaacfbc76033d04acaf878fbec.webp"
          alt="fourth slide"
        />
        
      </Carousel.Item>
    </Carousel>
        </div>
    );
}

export default Banners;