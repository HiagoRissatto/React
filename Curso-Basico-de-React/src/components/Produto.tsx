type Props={
    nome:string
    valor: number
    disponivel:boolean
}

function Produto ({nome, valor, disponivel} : Props){
    return(
        <div className="card" style={{width:"15rem"}}>
            <div className="card-body">
                <h5 className="card-title">Nome do Produto: {nome}</h5>
                <p className="card-text">Valor do Produto: {valor}</p>
                <p className="card-text">Disponibilidade: {disponivel ? "disponivel" : "Indisponivel"}</p>
            </div>
        </div>
    )
}

export default Produto;