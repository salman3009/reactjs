import {useEffect,useRef} from 'react';


const UseRef =()=>{
        
    const refDetails = useRef(null);

    useEffect(()=>{
            refDetails.current.focus();
            console.log(refDetails.current.id);
            console.log(refDetails.current.name);
            console.log(refDetails.current.type);
    },[])

     return(<div>
         <input ref={refDetails} name="fullName" id="registerFullName" type="text"/>
     </div>)
}
export default UseRef;