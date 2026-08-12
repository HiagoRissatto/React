import "bootstrap/dist/css/bootstrap.min.css";
import Usuario from "./components/Usuario";
import Produto from "./components/Produto";

export function App() {
  return (
      <div className="d-flex justify-content-center align-items-center min-vh-100 gap-3 flex-wrap">
        <Usuario nome="Hiago" idade={24} profissao="Montador de Moveis" />
        <Usuario nome="Pedro" idade={19} profissao="Montador de moveis" />
        <Usuario nome="Renan" idade={20} profissao="Desenvolvedor Web" />
        <Produto nome="Parafusadeira" valor={349} disponivel={true}/> 
        <Produto nome="Camisa Polo" valor={57} disponivel={false}/> 
        <Produto nome="Sapatenis" valor={299} disponivel={true}/>        
      </div>
    
  );
}
