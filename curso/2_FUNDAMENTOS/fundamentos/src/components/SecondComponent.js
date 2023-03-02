const SecondComponent = () => {
  const component = "segundo";
  const descricao = `Descrição do ${component} componente`;

  return (
    <>
      <h1 className={"titulo-second-component"}>Segundo componente</h1>
      <p>{descricao}</p>
    </>
  );
};

export default SecondComponent;
