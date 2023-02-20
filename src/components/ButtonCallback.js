import React from 'react';
 function  Button(props)
 { 
   console.log(`button component   ${props.value}`)
    return (
        <div>
           <button onClick={props.whenClick} type = {props.type} > {props.value}</button> 
        </div>
    )
 }
 export default React.memo(Button);