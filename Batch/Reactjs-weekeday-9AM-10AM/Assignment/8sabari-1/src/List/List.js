import './List.css';
function List(props) {

    return (
        <div className="box">
             <p className='header'>{props.name}</p>
             <p className='header'>{props.price}</p>
        </div>
    )
}
export default List;