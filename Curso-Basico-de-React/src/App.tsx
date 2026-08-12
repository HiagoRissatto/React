import "bootstrap/dist/css/bootstrap.min.css";
import Usuario from "./components/Usuario";
import Produto from "./components/Produto";
import Contador from "./components/Contador";
export function App() {
  return (
    <div className="container py-5">
      <h2 className="mb-3">Usuarios</h2>
      <div className="d-flex gap-3 flex-wrap mb-5">
        <Usuario nome="Hiago" idade={24} profissao="Montador de Moveis" />
        <Usuario nome="Pedro" idade={19} profissao="Montador de moveis" />
        <Usuario nome="Renan" idade={20} profissao="Desenvolvedor Web" />
      </div>
      <h2 className="mb-3">Produtos</h2>
      <div className="d-flex gap-3 flex-wrap">
        <Produto nome="Parafusadeira" valor={349} disponivel={true} />
        <Produto nome="Camisa Polo" valor={57} disponivel={false} />
        <Produto nome="Sapatenis" valor={299} disponivel={true} />
      </div>
      <Contador/>
    </div>
  );
}
