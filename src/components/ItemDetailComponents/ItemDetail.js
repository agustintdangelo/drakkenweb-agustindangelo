import React from "react";
import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { Container, Col, Row } from "react-bootstrap";
import { useCartContext } from "../Context/CartContext.js";

export const ItemDetail = (product) => {
  const { addToCart, realStock } = useCartContext();
  const stock = realStock(product);
  const onAdd = (qty) => addToCart(product, qty); //addToCart(product, qty);
  return (
    <Container>
      <Row>
        <Col sm={8}>
          <div className="cards mx-auto my-3 border border-black rounded">
            <h2 className="text-center">{product.title}</h2>
            <img className="image-detail" src={product.pictureUrl} alt="" />
            <h6>Categoría: {product.category}</h6>
            <h6>Detalle: {product.description}</h6>
            
          </div>
        </Col>
        <Col>
          <h6 className="precio">Precio: {product.price}</h6>
          
           
            {stock > 0 ? <div className="row"> <ItemCount onAdd={onAdd} stockItem={stock}></ItemCount> <h6>Stock: {stock}</h6></div> : <h6>Sin stock</h6>}
          
        </Col>
      </Row>
    </Container>
  );
};
