function ListaUsuario(){
    const usuarios = [
        {id:1, nome :"Hiago", idade:24},
        {id:2, nome: "Renan", idade:20},
        {id:3, nome:"Rhayssa", idade:20}
    ];
        return(
            <>
             {usuarios.map((usuario) => (
            <p key={usuario.id} >{usuario.nome}-{usuario.idade} anos
            </p>
             ))}
            </>
        );
    } 

export default ListaUsuario;