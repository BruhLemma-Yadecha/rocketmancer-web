import { useState } from 'react';

const Parameters = () => {
    const [stages, setStages] = useState(1);
    const [totalDeltaV, setTotalDeltaV] = useState(0);
    const heading = ["Stage", "Specific Impulse", "Propellant Mass Fraction"];
    return (
        <div>
            <h1>Parameters</h1>
            <label>Stages: </label>
            <input
                type = "number"
                value = {stages}
                onChange = {(e) => setStages(Math.max(1, e.target.value))}
            /> <br />
            <label>Total Delta-V:</label>
            <input
                type = "number"
                value = {totalDeltaV}
                onChange = {(e) => setTotalDeltaV(Math.max(0, e.target.value))}
            />
        </div>
    )
}

export default Parameters