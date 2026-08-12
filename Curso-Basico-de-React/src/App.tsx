import Usuario from "./components/Usuario";
import "bootstrap/dist/css/bootstrap.min.css";

export function App() {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <Usuario nome="Hiago" idade={24} profissao="Montador de Moveis" />
          </div>
        </div>
        <div className="card" style={{ width: "18rem" }}>
          <div className="card-body">
            <Usuario nome="Pedro" idade={19} profissao="Montador de moveis" />
          </div>
        </div>
        <div className="card" style={{width:"18rem"}}>
          <div className="card-body">
            <Usuario nome="Renan" idade={20} profissao="Desenvolvedor Web" />
          </div>
        </div>
      </div>
    </>
  );
}
