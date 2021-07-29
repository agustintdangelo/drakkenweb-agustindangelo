import React from "react";
import logoDrakken from "./logo.svg";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./components/ItemDetailComponents/ItemDetailContainer";
import { CartProvider } from "./components/Context/CartContext";

import ConfirmBuy from "./components/ConfirmBuy/ConfirmBuy";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar logo={logoDrakken} />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>

          <Route path="/categories/:categoryName">
            <ItemListContainer />
          </Route>

          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>

          <Route path="/cart">
            <Cart />
          </Route>
          <Route exact path="/ConfirmBuy">
              <ConfirmBuy/>
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
