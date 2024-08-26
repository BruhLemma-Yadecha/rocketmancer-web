import "../styles/Rocket.css";
import DisplayProperty from "./DisplayProperty";

const MASS_UNIT = "t";
const VELOCITY_UNIT = "m/s";
const SPECIFIC_IMPULSE_UNIT = "s";

const Rocket = ({ rocket }) => {
  if (!rocket) return <div>Loading...</div>;

  const properties = [
    {name: "Delta V", type: "velocity"},
    {name: "Mass Ratio", type: "ratio"},
    {name: "Payload Mass", type: "mass"},
    {name: "Wet Mass", type: "mass"},
    {name: "Dry Mass", type: "mass"},
    {name: "Structural Mass", type: "mass"},
    {name: "Propellant Mass", type: "mass"},
    {name: "Exhaust Velocity", type: "velocity"},
    {name: "Specific Impulse", type: "time"},
    {name: "Propellant Mass Fraction", type: "percentage"},
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
        <em>Payload ({MASS_UNIT}): </em> {rocket.payload} kg <br />
      </div>
      <div>
        <em>Total Mass ({MASS_UNIT}): </em> {rocket.totalMass} kg <br />
      </div>
      &nbsp;
      <table>
        <tbody>
          <tr>
            <td></td>
            {rocket.stages.map((stage, index) => (
              <td key={index} className={"rocket-display-header"}><em>Stage {index + 1}</em></td>
            ))}
          </tr>
          {properties.map((property, index) => <DisplayProperty key={index} name={property.name} type={property.type} stages={rocket.stages} />)}
        </tbody>
      </table>

    </div>
  )
};

export default Rocket;
