import { useState } from "react";
import "./App.css";
import baseConfig from "./config/baseConfig.json";
import Rocket from "./components/Rocket";
import Title from './components/Title';

function App() {
  const [rocket, setRocket] = useState(baseConfig.rocket);
  return (
    <div>
      <Title />
      <Rocket rocket={rocket} setRocket={setRocket} />
    </div>
  );
}

export default App;
