import React, {useState, useEffect, useRef} from 'react'

function UseRefTimer() {
    const [ timer , setTimer ]  = useState(0);
    const stop = useRef();
    useEffect(() => {
           stop.current = setInterval( ()=>{
                setTimer(prev => prev+1)
            },1000)
            return ()=> {
                clearInterval(stop.current)
            };
     }, [])
  return (
    <div>
        <h1> hook timer : {timer}</h1>
        <button onClick={()=> clearInterval(stop.current)}> clear</button>
    </div>
  )
}

export default UseRefTimer