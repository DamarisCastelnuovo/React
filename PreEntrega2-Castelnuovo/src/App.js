import React from 'react';
import Error404 from './componentes/Error404';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import ItemListContainer from './componentes/ItemListContainer';
import Navbar from './componentes/Navbar';
import ItemCount from './componentes/ItemCount';
import './index.css';
import Footer from './componentes/Footer';
import Titulo from './componentes/Titulo';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Titulo/>
      <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
        <Route path={"*"} element={<Error404/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;


