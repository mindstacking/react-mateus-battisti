const TemplateExpressions = () => {
  const name = "Rogério";
  const middleName = "Brito";
  const sirName = "Santos";
  const email = "rogerbritosan@gmail.com";
  const data = {
    age: 40,
    job: "Programmer",
  };
  const stacks = {
    frontend: "React",
    backend: "Java",
    devops: "Git",
    cms: "Wordpress"
  }

  return (
    <div>
      <p>
        Olá <strong>{name} {middleName} dos {sirName}</strong>, como vai?
      </p>
      <p>Meu cargo: {data.job}</p>
      <p>Idade: {data.age}</p>
      <p>Email: <a href={"mailto: " + email}>{email}</a></p>
      {console.log("Olha lá...")}
      <p>Execute esta conta: {10 + 8}</p>
      <h2>Minhas stacks:</h2>
      <p>Frontend: {stacks.frontend}</p>
      <p>Backend: {stacks.backend}</p>
      <p>DevOps: {stacks.devops}</p>
      <p>CMS: {stacks.cms}</p>
    </div>
  );
};

export default TemplateExpressions;
