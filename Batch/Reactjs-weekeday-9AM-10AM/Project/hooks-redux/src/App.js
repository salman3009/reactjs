import './App.css';
import UseRef from './useRef';
import UseReducer from './useReducer';
import ComponentA from './ComponentA';
import React from 'react';
import UseCallback from './useCallback';
export const UserContext = React.createContext();

function App() {
  return (
    <div className="App">
       {/* <UseRef/> */}
       {/* <UseReducer/> */}
       {/* <UserContext.Provider value={"akash"}>
          <ComponentA/>
       </UserContext.Provider> */}
       <UseCallback/>
     
    </div>
  );
}

export default App;
