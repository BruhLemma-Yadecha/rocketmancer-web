import "../styles/Rocket.css";
import Stages from "./Stages";

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
    console.log(response.data);
  });

  return <p>Optimization complete!</p>;
};

export default Rocket;
