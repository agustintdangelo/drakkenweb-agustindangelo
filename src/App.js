import React from 'react';
import logoDrakken from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


class App extends React.Component{
  render(){
    return (
      <div className="App">
        <header>
          <NavBar logo={logoDrakken}/>
        </header>
        <div>
          <ItemListContainer greeting='Bienvenidos a Drakken, donde encontrás lo que querés para tu pc.'/>
        </div>
      </div>
    );
  }
}
export default App;
