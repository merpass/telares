import React from 'react';
import { Card, Accordion, Button, } from 'react-bootstrap';

const Contacto = () => {
  return (
   <div align="center"> 
   <Accordion>
    <Card>
    <div><h2>Contacto</h2></div>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="info" eventKey="0">
          Perfil de Instagram
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
      <Card.Body><h4><a id="color" href= "https://www.instagram.com/telaresdelpilar"  target="_blanc"><img src="ig.png" width="50px"></img>@telaresdelpilar</a></h4></Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header> 
        <Accordion.Toggle as={Button} variant="info" eventKey="1">
         E-mail
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body><h4><a id="color" href= "mailto:telaresdelpilar@gmail.com" target="_blanc"><img src="mail.png" width="50px"></img>telaresdelpilar@gmail.com</a></h4></Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
  </div>
  );
}

export default Contacto;
