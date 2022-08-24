import './List_One.css';
function List_One(props) {

    let fullName = "Mithran";
    let age = 44;

    return (<div>
        <h1>{fullName}</h1>
        <h1>{age}</h1>
        <h1>{2+2}</h1>
        <h1>{3*3}</h1>
        <h1>{fullName === "Mithran"?"yes Mithran":"no Mithran"}</h1>
    </div>)
}
export default List_One;