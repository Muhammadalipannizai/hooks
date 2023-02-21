import React, {useContext} from 'react';
import CompC from './CompC';
import { countContext } from './UseReduGSM';
function CompB(){

const globleState1 = useContext(countContext);
    return (
        <div>
         Component B

       <h1>  {globleState1.countGloble} </h1> 
            <button onClick={()=> globleState1.dispatchGloble('increment')}>Increment</button>
            <button onClick={ ()=>globleState1.dispatchGloble('decrement')}>Decrement</button>
            <button onClick={()=>globleState1.dispatchGloble('reset')}>Reset</button>
     
     <div>
        <CompC/>
     </div>
        </div>
    )
}
export default CompB;