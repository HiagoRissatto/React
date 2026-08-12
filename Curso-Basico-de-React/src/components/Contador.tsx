import { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);
  function btnAdicionar() {
    setContador(contador + 1);
  }
  function btnRemover() {
    setContador(contador - 1);
  }
  function btnZerar() {
    setContador(0);
  }

  return (
    <div>
      <button type="button" className="btn btn-primary" onClick={btnAdicionar}>
        Adicionar
      </button>
      <button type="button" className="btn btn-danger" onClick={btnRemover}>
        Remover
      </button>
      <button type="button" className="btn btn-info" onClick={btnZerar}>
        Zerar
      </button>
      <p>Contagem: {contador}</p>
    </div>
  );
}

export default Contador;
