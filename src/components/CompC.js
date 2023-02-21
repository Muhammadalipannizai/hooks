import React, {useContext} from 'react';
import { countContext } from './UseReduGSM';
function CompC(){
    const globleState2 = useContext(countContext);
    return (
        <div>
        Component c

      <h1>  {globleState2.countGloble} </h1> 
           <button onClick={()=> globleState2.dispatchGloble('increment')}>Increment</button>
           <button onClick={ ()=>globleState2.dispatchGloble('decrement')}>Decrement</button>
           <button onClick={()=>globleState2.dispatchGloble('reset')}>Reset</button>
    
       </div>
    )
}
export default CompC;