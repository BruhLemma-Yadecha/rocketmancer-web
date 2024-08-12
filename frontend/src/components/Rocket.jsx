import "../styles/Rocket.css";
import Stages from "./Stages";

const Rocket = ({ rocket, setRocket }) => {
  let stages = [];
  if (!rocket.stages) {
    stages = [];
  }
  return (
    <div>
      <h2 className={"rocketName"}>{rocket.name}</h2>
      <Stages
        stages={rocket.stages || stages}
        setStages={(stages) => setRocket({ ...rocket, stages })}
      />
    </div>
  );
};

export default Rocket;
