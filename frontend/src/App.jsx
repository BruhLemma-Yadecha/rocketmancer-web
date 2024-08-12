import { useState } from "react";
import "./App.css";
import DesignForm from "./components/DesignForm";
import Stages from "./components/Stages";

function App() {
  const [stages, setStages] = useState([]);
  return (
    <div>
      <h1 className={'title'}>🚀rocketmancer</h1>
      <Stages stages={stages} setStages={setStages} />
      <DesignForm stages={stages} setStages={setStages} />
    </div>
  );
}

export default App;
