type Props ={
    nome:   string
    idade: number
    profissao:string
}

function Usuario ({nome, idade, profissao} : Props){
    return(
        <>
            <h2 className="card-title">{nome}</h2>
            <h2 className="card-text">{idade}</h2>
            <h2 className="card-text">{profissao}</h2>
        </>
    )
}

export default Usuario;