import React from 'react';
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { Container, Col, Row } from 'react-bootstrap';
import {useCartContext} from '../Context/CartContext.js';



export const ItemDetail = (product) => {
    const { addToCart } = useCartContext();
    const onAdd = qty => addToCart(product, qty);   //addToCart(product, qty);
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
        <div className="row justify-content-"><ItemCount  onAdd={onAdd} stockItem={product.stockItem}></ItemCount></div>
        </Col>
        </Row>
        </Container>
    )
}
