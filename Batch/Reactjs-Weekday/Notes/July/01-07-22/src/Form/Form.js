

function Form(){
     return(<div>
         <form>
            Product Name:<input type="text" id="productName" name="productName"/>
            <br/>
            <br/>
            Price:<input type="text" id="price" name="price"/>
            <br/>
            <br/>
            <button>Add</button>
         </form>
     </div>)
}

export default Form;