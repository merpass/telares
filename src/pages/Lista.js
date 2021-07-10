import React, { Component } from "react";
import { ListGroup } from "react-bootstrap";
import ProductoDetalle from "../components/ProductoDetalle";
import firebase from "../config/firebase";

class Lista extends Component {
  constructor() {
    super();
    this.state = {
      productos: [],
      loading: true,
    };
  }
  componentDidMount() {
    firebase.db
      .collection("Producto")
      .get()
      .then((querySnapshot) => {
        this.setState({
          productos: querySnapshot.docs,
          loading: false,
        });
      });
  }

  render() {
    return (
      <>
        <div style={{ width: "18rem", margin: "auto" }}>
          <h2>Nuestros productos</h2>
          <ListGroup>
            {this.state.productos.map((producto) => (
              <ProductoDetalle
                key={producto.id}
                data={producto}
                buttons={true}
              />
            ))}
          </ListGroup>
        </div>
      </>
    );
  }
}

export default Lista;
