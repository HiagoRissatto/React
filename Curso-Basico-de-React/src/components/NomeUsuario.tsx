import { useState } from "react";

function Usuario() {
  const [nome, setNome] = useState("");
  return( 
  <div >
      <input className="form-control" value={nome} onChange={(e) => setNome(e.target.value)} />
      <p>{nome === "" ? "Digite seu nome acima." : `Olá, ${nome}`}</p>
  </div>
  )
}

export default Usuario;
