import React from "react";
import { useCartContext } from "../Context/CartContext.js";
import { Redirect } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useCartContext();
  if (!cart.length) return <Redirect to="/" />;
  return (
    <div>
      <h1>Carrito de compras</h1>
      {cart.map((item) => (
        <h1>
          Producto: {item.title} - {item.quantity}
        </h1>
      ))}
      <button onClick={clearCart}>VACIAR CARRITO</button>
    </div>
  );
};

export default Cart;
