type Props = {
  nome: string;
  idade: number;
  profissao: string;
};

function Usuario({ nome, idade, profissao }: Props) {
  return (
      <div className="card" style={{ width: "18rem" }}>
        <div className="card-body">
          <h5 className="card-title">Nome: {nome}</h5>
          <p className="card-text">Idade: {idade}</p>
          <p className="card-text"> Profissão: {profissao}</p>
        </div>
      </div>
  );
}

export default Usuario;
