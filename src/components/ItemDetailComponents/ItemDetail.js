import React from "react";
import "./ItemDetail.scss";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../Context/CartContext.js";

export const ItemDetail = (product) => {
  const { addToCart, realStock } = useCartContext();
  const stock = realStock(product);
  const onAdd = (qty) => addToCart(product, qty);

  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-4 col-lg-6 item-photo">
          <img alt={product.title} style={{ maxWidth: "100%" }} src={product.pictureUrl} />
        </div>
        <div className="col-xs-4 col-lg-6" style={{ border: "0px solid gray" }}>
          <h3>{product.title}</h3>
          {stock > 0 ? (
            <h5 style={{ color: "#8548B3" }}>Stock: {stock} unidades.</h5>
          ) : (
            <h5 style={{ color: "#8548B3" }}>Sin stock</h5>
          )}
          <h6 className="title-price">PRECIO </h6>
          <h3 style={{ marginTop: "0px" }}>$ {product.price}</h3>
          <h6 style={{ marginTop: "" }} className="title-price">
            DETALLE DEL PRODUCTO{" "}
          </h6>
          <h3 style={{ marginTop: "0px" }}>
            <p className="description">{product.description}</p>
          </h3>
          <div
            className="section"
            style={{
              paddingBottom: "20px",
              paddingTop: "20px",
              marginTop: "5%",
            }}
          >
            <h6 className="title-attr">
              <small>CANTIDAD</small>
            </h6>
            <div>
              <ItemCount stockItem={stock} onAdd={onAdd} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
