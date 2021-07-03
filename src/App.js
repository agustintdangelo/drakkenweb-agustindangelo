import React from 'react';
import logoDrakken from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/ItemDetailComponents/ItemDetailContainer';


function App() {
  return (
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
          <ItemDetailContainer></ItemDetailContainer>
        </Route>

      </Switch>
    </BrowserRouter>
  );
}
export default App;
