import "./Table.css";

function Table() {
  let fullName = "salman";
  let age = 44;

  return (
    <div>
      <h1>{fullName}</h1>
      <h1>{age}</h1>
      <h1>{2 + 2}</h1>
      <h1>{3 * 3}</h1>
      <h1>{fullName === "salman" ? "yes salman" : "no salman"}</h1>
    </div>
  );
}

export default Table;
