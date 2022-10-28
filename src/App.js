import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css'
import indraYaLlega from './assets/img/indraYaLlega.png'
function App() {
  return(
    <>
    <NavBar/>
    <ItemListContainer greeting='Bienvenido a una nueva experiencia en la compra de ropa online' imagen={indraYaLlega} />
    </>
    
  )
}

export default App;