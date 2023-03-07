import CarDetails from "./components/CarDetails";

function App() {

  return (
    <div className="App">
      <CarDetails marca="BMW" km={1000} cor="vermelho" newCar={false} />
      <CarDetails marca="Hyundai" km={20000} cor="azul" newCar={true} />
      <CarDetails marca="Audi A3" km={21000} cor="preto" newCar={true} />
      <CarDetails marca="Fusca" km={500} cor="bege" newCar={false} />
    </div>
  );
}

export default App;
