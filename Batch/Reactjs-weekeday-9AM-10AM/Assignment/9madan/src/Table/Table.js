import './Table.css';

function Table(){

    let fullName = "Madhan raja";
    let age = 23;

    return (<div>
        <h1>{fullName}</h1>
        <h1>{age}</h1>
        <h1>{1+2}</h1>
        <h1>{3*3}</h1>
        <h1>{fullName ==="Madhan raja"?"yes Madhan raja":"no Madhan raja"}</h1>
        </div>)
}

export default Table;