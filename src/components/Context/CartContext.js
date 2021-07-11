import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [database, setDatabase] = useState([]);

  const clearCart = () => setCart([]);

  const isInCart = id => cart.some(item => item.id === id);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map(cartElement => {
        if (cartElement.id === item.id) {
          return { ...cartElement, quantity: cartElement.quantity + quantity }
        } else return cartElement;
      })
     
      
      
      setCart(newCart);
    
    } else {
      setCart(prev => [...prev, { ...item, quantity }]);
    }
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://mocki.io/v1/9f8e1546-6c7d-4cb9-a4b9-7371f978a6b0");
      setDatabase(data);
    })();
  }, []);

  return <CartContext.Provider value={{ cart, setCart, clearCart, addToCart, database }}>
    {children}
  </CartContext.Provider>
}