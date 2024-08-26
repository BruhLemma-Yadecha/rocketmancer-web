import "../styles/Rocket.css";

const MASS_UNIT = "t";
const VELOCITY_UNIT = "m/s";
const SPECIFIC_IMPULSE_UNIT = "s";

const Rocket = ({ rocket }) => {
  if (!rocket) return <div>Loading...</div>;

  const properties = [
    "Number",
    "Delta-V",
    "Mass Ratio",
    "Payload Mass",
    "Wet Mass",
    "Dry Mass",
    "Structural Mass",
    "Propellant Mass",
    "Exhaust Velocity",
    "Specific Impulse",
    "Propellant Mass Fraction",
  ];

  console.log(rocket);
  return (
    <div className={"rocket-display"}>

      <h2 className={"rocket-display-name"}>{rocket.name}</h2>
      <div>
        <em>Stages: </em> {rocket.totalStages} <br />
      </div>
      <div>
        <em>Total Delta V: </em> {rocket.totalDeltaV} {VELOCITY_UNIT} <br />
      </div>
      <div>
        <em>Payload: </em> {rocket.payload} kg <br />
      </div>
      <div>
        <em>Total Mass: </em> {rocket.totalMass} kg <br />
      </div>

      <h3>Stages</h3>
      <table>
        <tbody>
          <tr>
            <td></td>
            {rocket.stages.map((stage, index) => (
              <td key={index} className={"rocket-display-header"}><em>Stage {index + 1}</em></td>
            ))}
          </tr>
          <tr>
            <td>Delta-V ({VELOCITY_UNIT})</td>
            {rocket.stages.map((stage, index) => (
              <td key={index}>{stage.deltaV}</td>
            ))}
          </tr>
          <tr>
            <td>Mass Ratio</td>
            {rocket.stages.map((stage, index) => (
              <td key={index}>{stage.massRatio}</td>
            ))}
          </tr>
          <tr>
            <td>Payload Mass ({MASS_UNIT})</td>
            {rocket.stages.map((stage, index) => (
              <td key={index}>{stage.payloadMass}</td>
            ))}
          </tr>
          <tr>
            <td>Wet Mass ({MASS_UNIT})</td>
            {rocket.stages.map((stage, index) => (
              <td key={index}>{stage.wetMass}</td>
            ))}
          </tr>
          <tr>
            <td>Dry Mass ({MASS_UNIT})</td>
            {rocket.stages.map((stage, index) => (
              <td key={index}>{stage.dryMass}</td>
            ))}
          </tr>
          <tr>
            <td>Structural Mass ({MASS_UNIT})</td>
            {rocket.stages.map((stage, index) => (
              <td key={index}>{stage.structuralMass}</td>
            ))}
          </tr>
          <tr>
            <td>Propellant Mass ({MASS_UNIT}) </td>
            {rocket.stages.map((stage, index) => (
              <td key={index}>{stage.propellantMass}</td>
            ))}
          </tr>
          <tr>
            <td>Exhaust Velocity ({VELOCITY_UNIT}) </td>
            {rocket.stages.map((stage, index) => (
              <td key={index}>{stage.exhaustVelocity}</td>
            ))}
          </tr>
          <tr>
            <td>Specific Impulse ({SPECIFIC_IMPULSE_UNIT})</td>
            {rocket.stages.map((stage, index) => (
              <td key={index}>{stage.specificImpulse}</td>
            ))}
          </tr>
          <tr>
            <td>Propellant Mass Fraction</td>
            {rocket.stages.map((stage, index) => (
              <td key={index}>{stage.propellantMassFraction}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  )
};

export default Rocket;
