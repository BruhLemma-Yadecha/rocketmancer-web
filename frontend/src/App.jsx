import { useState } from "react";
import "./App.css";
import baseConfig from "./config/baseConfig.json";
import Rocket from "./components/Rocket";
import Title from './components/Title';
import DesignForm from "./components/DesignForm";
import Parameters from "./components/Parameters";

function App() {
  const [rocket, setRocket] = useState(baseConfig.rocket);
  return (
    <div>
      <Title />
      <Rocket rocket={rocket} setRocket={setRocket} />
      <DesignForm rocket={rocket} setRocket={setRocket} />
      <Parameters />
    </div>
  );
}

export default App;
