import { useState } from "react";

const DesignForm = ({ rocket, setRocket }) => {
  const [specificImpulse, setSpecificImpulse] = useState(0);
  const [propellantMassRatio, setPropellantMassRatio] = useState(0);

  const addStage = () => {
    if (!rocket.stages) {
      rocket.stages = [];
    }
    const newStages = [...rocket.stages, { specificImpulse, propellantMassRatio }];
    setRocket({ ...rocket, stages: newStages });
  };
  return (
    <>
      <h2>Add Stages</h2>
      <label>Specific Impulse:</label>
      <input
        type="number"
        value={specificImpulse}
        onChange={(e) => setSpecificImpulse(e.target.value)}
      />
      <label>Propellant Mass Ratio:</label>
      <input
        type="number"
        value={propellantMassRatio}
        onChange={(e) => setPropellantMassRatio(e.target.value)}
      /> &nbsp;
      <button onClick={addStage}>Add Stage!</button>
    </>
  );
};

export default DesignForm;
