import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const style = {
  imgProducto:{
      width:"600px",
      display:"block",
      margin:"auto"
  },
     
  }

const Lookbook = () => {
  return (

<Carousel>
  <Carousel.Item>
    <img  style={style.imgProducto} src="https://www.telaresdelpilar.com.ar/wp-content/uploads/2020/10/look1.jpg" alt="Look 1"/>
    <Carousel.Caption>
      <h3>Verano 2020 - Vestidos</h3>
      <p>El blanco como un básico en un vestido primaveral.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={style.imgProducto} src="https://www.telaresdelpilar.com.ar/wp-content/uploads/2020/10/look2.jpeg" alt="Look 2"/>
    <Carousel.Caption>
      <h3>El poncho bordado</h3>
      <p>Agregar un bordado a mano en una prenda básica para hacerla única. </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={style.imgProducto} src="https://www.telaresdelpilar.com.ar/wp-content/uploads/2020/10/look3.jpg" alt="Look 3"/>
    <Carousel.Caption>
      <h3>Poncho Capa</h3>
      <p>Siempre el detalle de los flecos suma.</p>
    </Carousel.Caption>
 </Carousel.Item>
 <Carousel.Item>
    <img style={style.imgProducto} src="https://www.telaresdelpilar.com.ar/wp-content/uploads/2020/10/look4.jpg" alt="Look 4"/>
    <Carousel.Caption>
      <h3>Ruana oversize</h3>
      <p>Infaltable en tu vestidor para todas las épocas.</p>
    </Carousel.Caption>
 </Carousel.Item>
</Carousel>

    
);
}

export default Lookbook;
