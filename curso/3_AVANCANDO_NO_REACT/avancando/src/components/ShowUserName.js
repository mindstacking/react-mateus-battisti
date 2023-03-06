const ShowUserName = ({nome, sobrenome, idade, email, telefone, fixo}) => {
    return (
        <div>
            <h1>Meu nome é {nome}</h1>
            <p>Sobrenome: {sobrenome}</p>
            <p>Idade: {idade}</p>
            <p>Email: <a href={"mailto: " + email}>{email}</a></p>
            <p>Telefone: {telefone}</p>
            <p>Tel. fixo: {fixo}</p>
        </div>
    )
}

export default ShowUserName