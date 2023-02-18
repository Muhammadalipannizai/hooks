import React, { useState } from 'react';

function Counter(){
const [ count, setCount] = useState(0);
 function inCrement(){
    setCount(count+1);
 }
 function deCrement(){
    setCount(count-1)
 }

    return(
        <div>
        <h1> {count}</h1>
            <button onClick={inCrement}> increase</button>
            <button onClick={deCrement}> decrease</button>
        </div>
    )
}

export default Counter;