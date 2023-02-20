
import React, {useState, useMemo, useEffect} from 'react';

function Memo(){
    const [ input , setInput ] = useState("");
    const [dark , setDark ] = useState(false);
    const double = useMemo(()=> { return slowFunction( input) }, [input]);
 
    function inputNumber(event) {
        const num = event.target.value;
            setInput(num);
    }
    const themeChange = useMemo(() => { 
        return { backgroundColor : dark ? 'black' :'white',
        color : dark ? 'white' :'black'}}
        ,[dark]) 
        
    function buttonClicked (){
        setDark( prev => !prev)
    }
    useEffect( ()=> {
        console.log('theme changed ')
    } , [themeChange])


    return (
        <div>
        <h1 style={themeChange}>  before : {input}  -   after: {double}  </h1>

        <input type = "number" onChange={inputNumber}></input>
        <button onClick={buttonClicked}> theme</button>
        </div>
    )
}

function slowFunction (arg){
    for (let i = 0; i<= 1000000000; i++){
       
    }   

    return arg*2
}
export default Memo;