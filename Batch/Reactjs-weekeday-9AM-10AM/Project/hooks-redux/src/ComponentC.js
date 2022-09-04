import {UserContext} from './App';

const ComponentC =()=>{
    // console.log(props);

            


    return(<div>
        <UserContext.Consumer>
            {
                (input)=>{
                       return (<div>{input}</div>)
                }
            }
        </UserContext.Consumer>
      
    </div>)
}
export default ComponentC;