const FourthComponent = () => {

  const element = "quarto";
  const skills = {
    element,
    cargo: "Programmer",
    email: "mindstackingorg@gmail.com"
  }

  return (
    <div>
      <h1 className="titulo-quarto-componente">Quarto componente</h1>
      <p>Descrição do {skills.element} elemento.</p>
      <p>Cargo: {skills.cargo}</p>
      <p>Email: <a href={"mailto: " + skills.email}>{skills.email}</a></p>
    </div>
  );
};

export default FourthComponent;
