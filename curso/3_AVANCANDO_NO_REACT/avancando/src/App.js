import { useState } from "react";

import CarDetails from "./components/CarDetails";
import ChangeNumberState from "./components/ChangeNumberState";
import Container from "./components/Container";
import Fragments from "./components/Fragments";
import Number from "./components/Number";

function App() {

  const showMessage = () => console.log("Que top esse React!");

  const cars = [
    {id: 1, brand: "BMW", km:1000, cor:"vermelho", newCar: false},
    {id: 2, brand: "Hyundai", km:2000, cor: "azul", newCar: true},
    {id: 3, brand: "Audi A3", km: 40000, cor: "preto", newCar: false},
    {id: 4, brand: "Fusca", km: 100000, cor: "bege", newCar: false}
  ]

  const [number, setNumber] = useState("");

  const handleNumber = (num) => {
    setNumber(num);
  }


  return (
    <div className="App">
      {cars.map((c) => (
        <CarDetails key={c.id} marca={c.brand} km={c.km} cor={c.cor} newCar={c.newCar} />
      ))}
      <Fragments propFragment="Sub do subtítulo" fifthTitle="Quinto título" sixthTitle="sexto título" />
      <Container myValue={10} handleMessage={showMessage}>
        <p>Este é o conteúdo (children)</p>
      </Container>
      <Number num={number} />
      <ChangeNumberState handle={handleNumber} />
    </div>
  );
}

export default App;
