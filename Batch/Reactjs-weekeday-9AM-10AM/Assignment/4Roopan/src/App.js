import './App.css';
import List from './List/List';
import Table from './Table/Table';
function App(){

      return (<div>
         <List name="mac" price="3000"/>
         <List name="hp" price="4000"/>
         <List name="sony" price="500"/>
         <List name="samsung" price="5000"/>
         <List name="iphone" price="7000"/>
         <List name="lg" price="9000"/>
         <List name="ltc" price="2323"/>
         <Table/>
        </div>
        )

}

export default App;