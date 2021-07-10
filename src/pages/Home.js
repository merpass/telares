import React from 'react';
import {Card} from 'react-bootstrap';

const Home = () => {
  return (
    <Card className="bg-dark text-white">
  <Card.Img src="new.jpg" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Bienvenidos</Card.Title>
    <Card.Text>
    Desde hace casi una década decidimos incursionar en la indumentaria generando prendas 
con materiales nobles, con un estilo bohemio «Hippie Chic», 
basándonos en ropa cómoda y artesanal con terminaciones en tejidos y bordados a mano.
    </Card.Text>
    <Card.Text>Esperamos que les gusten nuestras propuestas.</Card.Text>
  </Card.ImgOverlay>
</Card>
    

    
  );
}

export default Home;