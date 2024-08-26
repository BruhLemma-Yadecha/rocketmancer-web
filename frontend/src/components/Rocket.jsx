import "../styles/Rocket.css";
import DisplayProperty from "./DisplayProperty";

const MASS_UNIT = "t";
const VELOCITY_UNIT = "m/s";
const SPECIFIC_IMPULSE_UNIT = "s";

const Rocket = ({ rocket }) => {
  if (!rocket) return <div>Loading...</div>;

  const properties = [
    "Delta V",
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
          {properties.map((property, index) => <DisplayProperty key={index} property={property} stages={rocket.stages} />)}
        </tbody>
      </table>

    </div>
  )
};

export default Rocket;
