// ListaDeProductos.js
import React from "react";
import Producto from "./Producto";

function ListaDeProductos({ productos }) {
  return (
    <div>
      {productos.map((producto) => (
        <Producto nombreProducto={producto.nombre} precio={producto.precio} />
      ))}
    </div>
  );
}

export default ListaDeProductos;
