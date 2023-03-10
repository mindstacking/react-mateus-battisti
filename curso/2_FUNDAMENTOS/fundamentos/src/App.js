import "./App.css";

import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";
import ThirdComponent from "./components/ThirdComponent";
import FourthComponent from "./components/FourthComponent";
import FifthComponent from "./components/FifthComponent";
import SixthComponent from "./components/SixthComponent";
import TemplateExpressions from "./components/TemplateExpressions";
import MyComponent from "./components/MyComponent";
import Events from "./components/Events"

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
      <MyComponent />
      <Events />
    </div>
  );
}

export default App;
