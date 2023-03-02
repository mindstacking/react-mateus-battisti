import "./App.css";

import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import FourthComponent from "./components/FourthComponent";
import FifthComponent from "./components/FifthComponent";
import SixthComponent from "./components/SixthComponent";
import TemplateExpressions from "./components/TemplateExpressions";

function App() {
  return (
    <div className="App">
      <TemplateExpressions />
      <FirstComponent />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <FifthComponent />
      <SixthComponent />
    </div>
  );
}

export default App;
