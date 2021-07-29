import React from "react";
import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { Container, Col, Row, Card } from "react-bootstrap";
import { useCartContext } from "../Context/CartContext.js";
/*<div className="cards mx-auto my-3 border border-black rounded">
            <h2 className="text-center">{product.title}</h2>
            <img className="image-detail" src={product.pictureUrl} alt="" />
            <h6>Categoría: {product.category}</h6>
            <h6>Detalle: {product.description}</h6>
          </div>*/
export const ItemDetail = (product) => {
  const { addToCart, realStock } = useCartContext();
  const stock = realStock(product);
  const onAdd = (qty) => addToCart(product, qty);
  return (
    <Container>
      <Row xs={1} md={2} className="g-4">
        <Col md={6}>
          <Card className="detail" style={{ width: '30 rem' }}>
            <Card.Img variant="top" src={product.pictureUrl} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                Categoría: {product.category}
              </Card.Text>
              <Card.Text>
                Detalle: {product.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md="auto">
          <h6 className="precio">Precio: {product.price}</h6>
          {stock > 0 ? (
            <div className="row">
              <ItemCount onAdd={onAdd} stockItem={stock}></ItemCount>
              <h6>Stock: {stock}</h6>
            </div>
          ) : (
            <h6>Sin stock</h6>
          )}
        </Col>
      </Row>
    </Container>
  );
};
