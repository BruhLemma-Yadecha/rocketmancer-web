import "../styles/Rocket.css";
import Stages from "./Stages";

const Rocket = ({ rocket, setRocket }) => {
  let stages = [];
  if (!rocket.stages) {
    stages = Array.from({ length: rocket.totalStages }, (_, i) => ({
      number: i + 1,
    }));
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
