import './App.css'
import List from './List/List';
import Table from './Table/Table';

function App() {

      return (<div>
            <List name="samsung" price="5000" ram="8gb ram"/>
            <List name="redmi" price="4000" />
            <List name="sony xperia" price="3000" />
            <List name="iphone" price="3500" />
            <List name="vivo" price="8000" />
            <List name="one plus" price="7500" />
            <List name="google pixel" price="2500" />
            <Table />
      </div>
      )

}

export default App;
