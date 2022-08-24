import './File.css';
// import Image from '../Images/1.jpg';
function File(props) {
    return (
        <div className='box1'>
            {/* <img src={Image} width={300} height={300} /> */}
            <p>{props.name}</p>
            <p>{props.price}</p>
        </div>
    )
}

export default File;