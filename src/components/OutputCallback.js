import React from 'react';
 function Output(props)
 {
    console.log(`output componnet   ${props.text}`)
    return(
        <div>
            <h1>   {props.text} -- {props.ageOut}</h1>
        </div>
    )
 }
 export default React.memo(Output); 