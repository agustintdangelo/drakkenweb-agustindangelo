import React from "react";
import "./Carrousel.scss";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";


function Carrousel() {
  return (
    
    <Carousel >
      
      <Carousel.Item > 
      <Link to={`/item/Wp850PoMoaq7lsmhgJ7h`}>
        <img
          className="d-block w-100"
          src="https://d3ugyf2ht6aenh.cloudfront.net/stores/896/208/products/redragon_k6301-5e4f94f238e23729f816212221273227-1024-1024.jpg"
          alt="First slide"
           height={500}
        />
        <Carousel.Caption>
          <h3>Redragon Dragonborn</h3>
          <p>Conseguilo en Drakken.</p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
      
      
      <Carousel.Item>
      <Link to={`/categories/Procesador`}>
        <img
          className="d-block w-100"
          src="https://www.muycomputer.com/wp-content/uploads/2019/06/Ryzen-1.jpg "
          alt="Second slide"
           height={500}
        />

        <Carousel.Caption>
          <h3>Obtené los nuevos procesadores Ryzen de AMD</h3>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
      
    </Carousel>
    
  );
}

export default Carrousel;
