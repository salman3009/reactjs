import "./List.css";

function List(Props){
    return(
        <div className='box'>
        <h1 className='heading'>{Props.name}</h1>
        <p className='details'>{Props.price}</p>
        <p className='details'>{Props.ram}</p>
        <p className='offers'>{Props.offer}</p>
    </div>
    )
}
export default List;