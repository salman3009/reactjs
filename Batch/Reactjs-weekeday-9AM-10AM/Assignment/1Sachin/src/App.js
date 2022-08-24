import logo from './logo.svg';
import './App.css';
import Detail from './File/Detail'
import List from './File/List'

function App() {
  return (
    <div>
    <Detail name ="Realme 9" price ="18,999" ram ="8 GB RAM" offer ="17% off"/>
    <Detail name ="Oppo K10" price ="14,990" ram ="6 GB RAM" offer ="21% off"/>
    <Detail name ="Infinix Note 12" price ="17,999" ram ="8 GB RAM" offer ="28% off"/>
    <Detail name ="Motorola" price ="15,999" ram ="8 GB RAM" offer ="12% off"/>
    <Detail name ="Vivo T1 44W" price ="14,999" ram ="4 GB RAM" offer ="19% off"/>
    <Detail name ="Poco M4 5G" price ="12,999" ram ="4 GB RAM" offer ="22% off"/>
    <List/>
    </div>
  );
}

export default App;
