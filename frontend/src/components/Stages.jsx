import Stage from "./Stage";

const Stages = ({ stages, setStages }) => {
  if (stages.length === 0) {
    return (
      <div>
        <h2>Stages</h2>
        <p>No stages have been added yet...</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Stages</h2>
      <ul>
        {stages.map((stage, index) => (
          <Stage key={index} stage={{ number: index + 1 }} />
        ))}
      </ul>
    </div>
  );
};

export default Stages;
