import "../styles/Rocket.css";
import Stages from "./Stages";
import Stage from "./Stage";

import axios from "axios";

const Rocket = ({ rocket, setRocket }) => {
  if (rocket.stages.length !== rocket.totalStages) {
    return (
      <div>
        <h2 className={"rocketName"}>{rocket.name}</h2>
        <Stages
          stages={rocket.stages || stages}
          setStages={(stages) => setRocket({ ...rocket, stages })}
        />
        <p>
          Status:{" "}
          {rocket.stages.length === rocket.totalStages
            ? "Complete!"
            : "Incomplete!"}
        </p>
      </div>
    );
  }
  axios.post("http://backend:8000/optimize/", rocket).then((response) => {
    setRocket(response.data)
  });

  return (
    <div>
      <h2 className={"rocketName"}>Billy Jean</h2>
      <em>Stages:</em> {rocket.totalStages}
      <em>Delta-V:</em> {rocket.deltaV}
      <em>Payload:</em> {rocket.payload}
      <em>Total Mass:</em> {rocket.totalMass}
      {rocket.stages.map((stage) => <Stage stage={stage} />)}
    </div>
  )
};

export default Rocket;
