const ThirdComponent = () => {

  const componente = "terceiro";
  const descricao = `Descrição do ${componente} componente`;
  const data = {
    age: 50,
    email: "rogerbrito@gmail.com",
    tipoSanguineo: "O+",
    componente
  }

  return (
    <div>
      <h1 className="third-titulo-component">Terceiro componente</h1>
      <p>{descricao}</p>
      <h2>Dados:</h2>
      <p>Idade: {data.age}</p>
      <p>Email: {data.email}</p>
      <p>Tipo sanguíneo: {data.tipoSanguineo}</p>
      <p>Componente: {data.componente}</p>
    </div>
  );
};

export default ThirdComponent;
