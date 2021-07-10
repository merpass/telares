import React from 'react';
import './App.css';
import Menu from './components/Menu';
import Footer from './components/Footer';
import {BrowserRouter, Route} from "react-router-dom";
import Home from './pages/Home';
import Lista from './pages/Lista';
import Producto from './pages/Producto';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Lookbook from './pages/Lookbook';
import GlobalState from './context/GlobalState';

function App() {
  // Render
  return (
    <GlobalState>
    <BrowserRouter>
      <Menu />
      <hr />
        <Route exact path={"/"} component={Home} />
        <Route exact path={"/lista"} component={Lista} />
        <Route exact path={"/contact"} component={Contact}/>
        <Route exact path={"/producto/:id"} component={Producto} />
        <Route exact path={"/login"} component={Login} />
        <Route exact path={"/lookbook"} component={Lookbook} />
        <Route exact path={"/registro"} component={Registro} />
      <hr />
      <Footer />
    </BrowserRouter>
    </GlobalState>
  );
}

export default App;
