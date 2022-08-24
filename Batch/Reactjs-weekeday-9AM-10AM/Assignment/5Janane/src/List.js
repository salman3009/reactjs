import "./List.css";

function List(props) {
  let mobile = { name: "Vivo", price: 23000 };
  let shortname = "Jane";
  return (
    <div className="box">
      <p className="header">{mobile.name}</p>
      <p className="header">{mobile.price}</p>
      <h3>{shortname}</h3>
    </div>
  );
}
export default List;
