import React from "react";

function Producto(props) {
  return (
    <div>
      <h2>Nombre del Producto: {props.nombreProducto}</h2>
      <h3>Precio: $ {props.precio}</h3>
    </div>
  );
}
export default Producto;
