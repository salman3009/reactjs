import './Detail.css';

function Detail(Props){
    return(
        <div className='box'>
            <h1 className='heading'>{Props.name}</h1>
            <p className='heading'>{Props.price}</p>
            <p className='heading'>{Props.ram}</p>
            <p className='heading'>{Props.offer}</p>
        </div>
    )
}

export default Detail;