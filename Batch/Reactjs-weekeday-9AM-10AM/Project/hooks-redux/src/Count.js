import React from "react";
const Count =(props)=>{
     console.log(props.type);

     return(<div>
        <div>{props.count}</div>   
     </div>)
}
export default React.memo(Count);