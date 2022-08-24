import './App.css'
import List from './List/List';
import Table from './Table/Table';

function App() {

      return (<div>
            <List name="APPLE iphone" price="50000" />
            <List name="vivo" price="40000" />
            <List name="sony " price="30000" />
            <List name="one plus" price="35000" />
            <List name="oppo" price="18000" />
            <List name="redmi" price="17500" />
            <List name="black berry" price="20000" />
            <Table />
      </div>
      )

}

export default App;
