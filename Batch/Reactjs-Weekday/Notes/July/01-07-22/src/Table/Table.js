
function Table(props){
     console.log(props.productName);
     console.log(props.price);

    //  function onSelectionHandler(){
    //      alert("selection");
    //  }

    const onSelectionHandler=()=>{
        alert("selection");
    }

    return(<div>
        <table>
            <thead>
            <tr>
                <th>Product Name</th>
                <th>Price</th>
            </tr>
            </thead>
           <tbody>
           <tr>
           {/* falsy values: undefined, null, 0, '', NaN ,false*/}
                {/* <td>{2+2}</td> */}
                {/* <td>{78 && 44 && "success"}</td> */}
                {/* <td>{78 && -1 && "success"}</td> */}
                {/* <td>{78 && false && "success"}</td> */}
                {/* <td>{78 && "" && "success"}</td> */}
                {/* <td>{78 && null && "success"}</td> */}
                {/* <td>{78 && undefined && "success"}</td> */}
                {/* <td>{78 && 0 && "success"}</td> */}
                {/* <td>{78 && NaN && "success"}</td> */}
                {/* <td>{78 && true && "success"}</td> */}
                {/* <td>{true}</td> */}
                {/* <td>{"programming"}</td> */}
                {/* <td>{false || "programming" || "success"}</td> */}
                {/* <td>{!false && "success"}</td> */}
                {/* <td>{3>2?"greater":"lesser"}</td> */}
                {/* <td>{onSelectionHandler()}</td> */}
                <td>{props.productName}</td>
                
                <td>30000</td>
            </tr>
           </tbody>
           
        </table>
    </div>)
}

export default Table;