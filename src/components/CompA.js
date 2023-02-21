import React, {useContext} from 'react';
import { countContext } from './UseReduGSM';
function CompA(){
    const globleState = useContext(countContext);

    return (
        <div>
        Component A
          <h1> {globleState.countGloble}</h1>
            <button onClick={()=> globleState.dispatchGloble('increment')}>Increment</button>
            <button onClick={ ()=>globleState.dispatchGloble('decrement')}>Decrement</button>
            <button onClick={()=>globleState.dispatchGloble('reset')}>Reset</button>
        </div>
    )
}
export default CompA;