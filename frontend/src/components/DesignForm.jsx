const DesignForm = ({ stages, setStages }) => {
    const addStage = () => {
        setStages(stages.concat({ number: stages.length + 1 }));
    };
  return (
    <>
      <h2>Design Form</h2>
      <button onClick={addStage}>Add Stage {stages.length + 1}!</button>
    </>
  );
};

export default DesignForm;
