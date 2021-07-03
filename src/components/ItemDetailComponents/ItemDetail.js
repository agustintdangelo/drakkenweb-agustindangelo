import React from 'react';
import './ItemDetail.scss';
import ItemCount from '../ItemCount/ItemCount';
import { Container, Col, Row } from 'react-bootstrap';



export const ItemDetail = (props) => {
    return (

        <Container>
            <Row>
            <Col sm={8}>
        <div className="cards mx-auto my-3 border border-black rounded">
            <h2 className="text-center">{props.title}</h2>
            <img className="image-detail" src={props.pictureUrl} alt="" />
            <h6>Categoría: {props.category}</h6>
            
            <h6>Detalle: {props.description}</h6>
        </div>
        </Col>
        <Col>
        <h6 className="precio">Precio: {props.price}</h6>
        <div className="row justify-content-"><ItemCount stockItem={props.stockItem}></ItemCount></div>
        </Col>
        </Row>
        </Container>
    )
}
