import './App.css';
import { useState } from "react";

import MyComponent from "./components/MyComponent";
import Title from './components/Title';

function App() {

  const n = 9;
  const [name, setName] = useState("Roger");

  const changeStyle = () => {
    name === "Roger" ? setName("Brito") : setName("Roger");
  }

  const expression = name === "Roger" ? ({backgroundColor: "purple", fontWeigh: "bold", color: "white"}) : ({fontSize: "2rem"})

  const classStatus = false;

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Este parágrafo é do App.js</p>
      <p style={{color: "red", backgroundColor: "yellow"}}>Elemento estilizado com CSS inline</p>
      <p style={{borderTop: "1rem solid gray", backgroundColor: "rgb(222,222,222)"}}>Outro paráfrago com CSS inline</p>
      <p style={n < 16 ? ({backgroundColor: "orange"}) : ({backgroundColor: "purple", color: "white"})}>Estilo dinâmico</p>
      <p style={n < 20 ? ({border: "5px dotted #000", backgroundColor: "white"}) : ({backgroundColor: "red"})}>Outro elemento com CSS dinâmico</p>

      <h2 style={expression} onClick={changeStyle}>Subtítulo da minha página</h2>

      <h3 className={classStatus ? "title-lead" : "sub-title"}>Título com classe dinâmica</h3>
      
      {/* CSS Modules */}
      <Title />
    </div>
  );
}

export default App;
