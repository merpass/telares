import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import context from 'react-bootstrap/esm/AccordionContext';
import { Link } from 'react-router-dom';
import ecomContext from '../context/ecomContext';


  
const Menu = (props) => {
  return (
  <ecomContext.Consumer>
    {
      context=>(
  <div align="center">
  <ButtonGroup >
    {
      context.login &&
      <>
  <Button variant="info"><Link to="/">Home</Link></Button>
  <Button variant="info"><Link to="/lookbook">Lookbook</Link></Button>
  <Button variant="info"><Link to="/lista">Lista de productos</Link></Button>
  <Button variant="info"><Link to="/contact">Contacto</Link></Button>
  <Button variant="info" onClick={context.logoutUser} >Salir</Button>
  </>
   }
   {
     !context.login &&
     <>
  <Button variant="info"><Link to="/">Home</Link></Button>
  <Button variant="info"><Link to="/lookbook">Lookbook</Link></Button>
  <Button variant="info"><Link to="/lista">Lista de productos</Link></Button>
  <Button variant="info"><Link to="/contact">Contacto</Link></Button>
  <Button variant="info"><Link to="/registro">Registro</Link></Button>
  <Button variant="info"><Link to="/login">Login</Link></Button>
  </>
   }
  
</ButtonGroup>
</div>

)
    }
</ecomContext.Consumer>


  );
}

export default Menu;
