import React from 'react';
import logoDrakken from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemCount from './components/ItemListContainer/ItemsComponents/ItemCount/ItemCount';


function App(){
    return (
      <div className="App">
        <header>
          <NavBar logo={logoDrakken}/>
        </header>
        <div>
          <ItemListContainer/>
        </div>
        <div>
          <ItemCount/>
        </div>
      </div>
    );
}
export default App;
