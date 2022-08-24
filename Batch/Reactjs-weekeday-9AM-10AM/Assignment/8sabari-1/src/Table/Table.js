import './Table.css';

function Table(){

    let fullName = "sabarinathan";
    let age = 23;

    return (<div>
        <h1>{fullName}</h1>
        <h1>{age}</h1>
        <h1>{1+5}</h1>
        <h1>{5*3}</h1>
        <h1>{fullName ==="sabarinathan"?"yes sabarinathan":"no sabarinathan"}</h1>
        </div>)
}

export default Table;