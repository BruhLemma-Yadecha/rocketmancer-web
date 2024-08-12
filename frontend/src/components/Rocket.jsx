import "../styles/Rocket.css";
import Stages from "./Stages";

const Rocket = ({ rocket, setRocket }) => {
  if (rocket.stages.length !== rocket.totalStages) {
    return (
      <div>
        <h2 className={"rocketName"}>{rocket.name}</h2>
        <Stages
          stages={rocket.stages || stages}
          setStages={(stages) => setRocket({ ...rocket, stages })}
        />
        <p>Status: {rocket.stages.length === rocket.totalStages ? "Complete!" : "Incomplete!"}</p>
      </div>
    );  
  }
  return <p>UNDER CONSTRUCTION!</p>
};

export default Rocket;
