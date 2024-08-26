import { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import ParametersStage from './ParametersStage';

const Parameters = ({ setRocket }) => {
    const heading = ["Stage", "Specific Impulse", "Propellant Mass Fraction"];

    const [config, setConfig] = useState(undefined);

    useEffect(() => {
        axios.get("/billyJean.json").then((response) => {
            setConfig(response.data);
        });
    }, []);

    useEffect(() => {
        if (!config) return;
        axios.post("http://localhost:8000/optimize/", config).then((response) => {
            setRocket(response.data.result);
        });
    }, [config]);

    const setName = (name) => {
        if (!name) return;
        setConfig({ ...config, name });
    }

    const setTotalStages = (totalStages) => {
        if (totalStages < 1) return;
        if (totalStages < config.totalStages) {
            const newStages = config.stages.slice(0, totalStages);
            setConfig({ ...config, totalStages, stages: newStages });
        } else if (totalStages > config.totalStages) {
            // add new dummy rows
            const dummyStage = { specificImpulse: 300.0, propellantMassFraction: 0.9 };
            const newStages = [...config.stages];
            for (let i = config.totalStages; i < totalStages; i++) {
                newStages.push(dummyStage);
            }
            setConfig({ ...config, totalStages, stages: newStages });
        }
    }

    const setTotalDeltaV = (totalDeltaV) => {
        totalDeltaV = parseFloat(totalDeltaV);
        if (totalDeltaV < 0) return;
        setConfig({ ...config, totalDeltaV });
    }

    const setStages = (stages) => {
        stages = parseInt(stages);
        setConfig({ ...config, stages });
    }

    const setPayload = (payload) => {
        payload = parseFloat(payload);
        if (payload <= 0) return;
        setConfig({ ...config, payload });
    }

    if (!config) return <div>Loading...</div>;

    return (
        <div>
            <h1>Parameters</h1>
            <label>Name: </label>
            <input type="text" value={config.name} onChange={(e) => setName(e.target.value)} /> <br />
            <label>Total Stages: </label>
            <input type="number" value={config.totalStages} onChange={(e) => setTotalStages(e.target.value)} />  <br />
            <label>Total Delta-V: </label>
            <input type="number" value={config.totalDeltaV} onChange={(e) => setTotalDeltaV(e.target.value)} />  <br />
            <label>Payload: </label>
            <input type="number" value={config.payload} onChange={(e) => setPayload(e.target.value)} />  <br />
            
            <h2>Stages</h2>
            <table>
                <thead>
                    <tr>
                        {heading.map((head) => <th key={head}>{head}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {config.stages.map((stage, index) => {
                        return <ParametersStage key={index} index={index} stages={config.stages} setStages={setStages} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default Parameters