import { useState } from "react"

import './App.css';
import ShowUserName from './components/ShowUserName'

function App() {

  const [userName] = useState("Antonio")

  return (
    <div className="App">
      <ShowUserName nome="Rogério" sobrenome="Brito dos Santos" idade={40} email={"@" + userName} telefone={"11981584396"} fixo={1129436701}  />
    </div>
  );
}

export default App;
