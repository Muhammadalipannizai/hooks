import React, {useReducer} from 'react';
import CompA from './CompA';
import CompB from './CompB';
// import CompC from './CompC';

export const countContext = React.createContext();
const initialState = 0;
const reducer = (state , action)=> {
    switch(action){
        case 'increment':
            return state +1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialState;
        default:
            return state
    }
}

function Globle(){

    const [count , dispatch]=  useReducer(reducer , initialState);
    return (
        <countContext.Provider 
        value = { { countGloble :count, dispatchGloble : dispatch}}
        >
        <div>
        
          <h1> Muhammad Ali</h1>
          <CompA/>
          <CompB/>
          {/* <CompC/> */}
         
        </div>
        </countContext.Provider>
    )
}
export default Globle;