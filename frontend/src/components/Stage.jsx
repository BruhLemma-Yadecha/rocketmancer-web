const Stage = ({ stage }) => {
  return (
    <div key={stage.number}>
      <h3>Stage {stage.stage}</h3>
      <em>Delta-V:</em> {stage.deltaV}
      <em>Dry Mass</em> {stage.dryMass}
      <em>Exhaust Velocity</em> {stage.exhaustVelocity}
      <em>Mass Ratio:</em> {stage.massRatio}
      <em>Payload Mass:</em> {stage.payloadMass}
      <em>Propellant Mass:</em> {stage.propellantMass}
      <em>Propellant Mass Fraction:</em> {stage.propellantMassFraction}
      <em>Specific Impulse:</em> {stage.specificImpulse}
      <em>Structural Mass:</em> {stage.structuralMass}
      <em>Wet Mass:</em> {stage.wetMass}
    </div>
  )
};

export default Stage;
