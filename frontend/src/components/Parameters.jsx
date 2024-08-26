import { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';

const Parameters = () => {
    const heading = ["Stage", "Specific Impulse", "Propellant Mass Fraction"];

    const [config, setConfig] = useState({
        name: "", totalStages: 1, totalDeltaV: 0, stages: []
    })

    useEffect(() => {
        axios.get("/public/billyJean.json").then((response) => {
            setConfig(response.data);
        });
    }, []);

    const setName = (name) => {
        setConfig({ ...config, name });
    }

    const setStages = (totalStages) => {
        setConfig({ ...config, totalStages });
    }

    const setTotalDeltaV = (totalDeltaV) => {
        setConfig({ ...config, totalDeltaV });
    }

    return (
        <div>
            <h1>Parameters</h1>
            <label>Name: </label>
            <input type="text" value={config.name} onChange={(e) => setName(e.target.value)} /> <br />
            <label>Total Stages: </label>
            <input type="number" value={config.totalStages} onChange={(e) => setStages(e.target.value)} />  <br />
            <label>Total Delta-V: </label>
            <input type="number" value={config.totalDeltaV} onChange={(e) => setTotalDeltaV(e.target.value)} />  <br />
        </div>
    )
}

export default Parameters