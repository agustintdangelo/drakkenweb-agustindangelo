import React from "react";
import logoDrakken from "./logo.svg";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./Screens/Cart/Cart";
import Carrousel from "./components/Carrousel/Carrousel";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ItemListContainer from "./Screens/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ItemDetailContainer } from "./Screens/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./Context/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar logo={logoDrakken} />
        <Switch>
          <Route exact path="/">
            <Carrousel />
            <ItemListContainer />
            <Footer />
          </Route>

          <Route path="/categories/:categoryName">
            <ItemListContainer />
            <Footer />
          </Route>

          <Route path="/item/:id">
            <ItemDetailContainer />
            <Footer />
          </Route>

          <Route path="/cart">
            <Cart />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </CartProvider>
  );
}
export default App;
