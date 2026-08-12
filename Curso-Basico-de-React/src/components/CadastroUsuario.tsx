import { useState } from "react";
function Cadastro() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [profissao, setProfissao] = useState("");
  const [cadastro, setCadastrado] = useState(false);

  function btnCadastro() {
    setCadastrado(true);
  }

  return (
    <div className="form">
      <input placeholder="Nome"
        className="form-control"
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input placeholder="Idade"
        className="form-control"
        type="text"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <input placeholder="Profissão"
        className="form-control"
        type="text"
        value={profissao}
        onChange={(e) => setProfissao(e.target.value)}
      />

      <button className="btn btn-primary" onClick={btnCadastro}>{cadastro ? "Cadastrado" : "Cadastrar"}</button>

      {cadastro && (<div>
        <h3>Usuario Cadastrado</h3>
        <p>Nome: {nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissao: {profissao}</p>
      </div>)}
    </div>
  );
}

export default Cadastro;
