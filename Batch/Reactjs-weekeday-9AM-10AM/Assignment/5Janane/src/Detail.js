import "./Detail.css";

function Detail(props) {
  return (
    <div className="Box">
      <h2>This is a new details</h2>
      <h4>Mobile Phones are sold out here.</h4>
      <p className="heading">{props.name}</p>
      <p className="heading">{props.price}</p>
      <p className="heading">{props.ram}</p>
      <p className="heading">{props.offer}</p>
    </div>
  );
}

export default Detail;
