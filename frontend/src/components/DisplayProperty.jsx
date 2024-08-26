const DisplayProperty = ({ property, stages }) => {
    const convertName = () => {
        const firstLetter = property[0].toLowerCase();
        const withoutFirstLetter = property.slice(1);
        const withoutSpaces = withoutFirstLetter.replace(/ /g, "");
        return firstLetter + withoutSpaces;
    };
    const convertedName = convertName();
    return (
        <tr>
            <td>{property}</td>
            { stages.map((stage, index) => <td key={index}>{stage[convertedName]}</td>) }
        </tr>
        
    );
};


export default DisplayProperty;