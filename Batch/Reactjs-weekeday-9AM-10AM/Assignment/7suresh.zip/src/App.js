import './App.css';
import List from "./List/List";
import Detail from "./Detail/Detail";

function App() {
  return (
    <div>
    <List name ="Sony" price ="49,999" ram ="8 GB RAM" offer ="17% off"/>
    <List name ="HP" price ="34,990" ram ="6 GB RAM" offer ="21% off"/>
    <List name ="Acer" price ="59,999" ram ="8 GB RAM" offer ="28% off"/>
    <List name ="Mac book" price ="99,999" ram ="8 GB RAM" offer ="12% off"/>
    <List name ="Lenovo" price ="39,999" ram ="8 GB RAM" offer ="19% off"/>
    <List name ="Dell laptop" price ="44,999" ram ="4 GB RAM" offer ="22% off"/>
    <Detail/>
     
    </div>
  );
}

export default App;
