import React, { useState, useEffect } from "react";
import ProductoDetalle from "../components/ProductoDetalle";
import firebase from "../config/firebase";
function Producto(props) {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    firebase.db
        .collection("Producto")
        .doc(props.match.params.id)
        .get()
        .then((doc) => {
        setProducto(doc);
        setLoading(false);
    });
  }, [props.match.params.id]);

  if (loading) {
    return <div>Loading ...</div>;
  } else {
    return <ProductoDetalle data={producto} buttons={false} />;
  }
}
export default Producto;
