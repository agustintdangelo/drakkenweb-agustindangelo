import React from "react";
import { useCartContext } from "../Context/CartContext.js";
import { Redirect } from "react-router-dom";
import ConfirmBuy from "../ConfirmBuy/ConfirmBuy.js";
import "./Cart.scss";

const Cart = () => {
  const { cart, clearCart, deleteItem} = useCartContext();
  if (!cart.length) return <Redirect to="/" />;
  return (
    <div className="d-flex justify-content-center flex-column">
      <h1 className="d-flex justify-content-center">Carrito de compras</h1>
      {cart.map((item) => (
        <h1 className="d-flex justify-content-center">
          Producto: {item.title} - {item.quantity}
          <button onClick={()=>deleteItem(item.id)}>X</button>
        </h1>
      ))}
      <h1 className="d-flex justify-content-center">Precio total: {cart.reduce((acc, { quantity, price })=> acc + quantity * price, 0).toFixed(2)}</h1>
      <button className="align-self-center btn btn-secondary btn-lg" onClick={clearCart}>VACIAR CARRITO</button>
      <ConfirmBuy/>
    </div>
  );
};

export default Cart;
