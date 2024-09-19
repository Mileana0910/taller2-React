import React, { useState } from "react";

function ContadorFuncional() {
  const [contador, setContador] = useState(0);
  return (
    <div>
      <h2>Contador: {contador}</h2>
      <button onClick={() => setContador(contador + 1)}>Incrementar</button>
    </div>
  );
}
export default ContadorFuncional;
