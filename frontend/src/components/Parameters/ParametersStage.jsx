import { useState } from 'react';

const ParametersStage = ({ index, stages, setStages }) => {
    const [specificImpulse, setSpecificImpulse] = useState(stages[index].specificImpulse);
    const [propellantMassFraction, setPropellantMassFraction] = useState(stages[index].propellantMassFraction);

    const updateStage = () => {
        const newStages = [...stages];
        newStages[index] = { specificImpulse, propellantMassFraction };
        setStages(newStages);
    }

    const editSpecificImpulse = (specificImpulse) => {
        specificImpulse = parseFloat(specificImpulse);
        if (specificImpulse < 0) return;
        setSpecificImpulse(specificImpulse);
        updateStage();
    }

    const editPropellantMassFraction = (propellantMassFraction) => {
        propellantMassFraction = parseFloat(propellantMassFraction);
        if (propellantMassFraction < 0) return;
        setPropellantMassFraction(propellantMassFraction);
        updateStage();
    }

    return (
        <tr key={index}>
            <td>{index + 1}</td>
            <td>
                <input type="number" value={specificImpulse} onChange={(e) => editSpecificImpulse(e.target.value)} />
            </td>
            <td>
                <input type="number" value={propellantMassFraction} onChange={(e) => editPropellantMassFraction(e.target.value)} />
            </td>
        </tr>
    )
}

export default ParametersStage