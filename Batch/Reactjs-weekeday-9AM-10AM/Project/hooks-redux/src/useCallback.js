import { useCallback, useState } from "react";
import Count from "./Count";
const UseCallback =()=>{
        
    const [getAge,setAge]=useState(0);
    const [getSalary,setSalary]=useState(0);

    const setAgeHandler=useCallback(()=>{
        setAge(getAge+1);
    },[getAge])
      

    const setSalaryHandler=useCallback(()=>{
        setSalary(getSalary+1);
    },[getSalary])
       
    

    return(<div>
    <div>
     <Count type="age" count={getAge}/> 
     <Count type="salary" count={getSalary}/>
     <button onClick={setAgeHandler}>Age</button> 
     <button onClick={setSalaryHandler}>Salary</button>   
    </div>   
    </div>)
}
export default UseCallback;