import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [qty, setQty] = useState(0);

  const clearCart = () => {
    setCart([]);
    setQty(0);
  };

  const isInCart = (id) => cart.some((item) => item.id === id);

  const deleteItem = (id, quantity) => {
    setCart(cart.filter((item) => item.id !== id));
    setQty(qty - quantity);
  };

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      const newCart = cart.map((cartElement) => {
        if (cartElement.id === item.id) {
          return { ...cartElement, quantity: cartElement.quantity + quantity };
        } else return cartElement;
      });
      setCart(newCart);
      setQty(qty + quantity);
    } else {
      setCart((prev) => [...prev, { ...item, quantity }]);
      setQty(qty + quantity);
    }
  };

  const realStock = (item) => {
    const foundItem = cart.find((product) => product.id === item.id);
    return foundItem ? item.stockItem - foundItem.quantity : item.stockItem;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        clearCart,
        addToCart,
        realStock,
        deleteItem,
        qty,
        setQty,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
