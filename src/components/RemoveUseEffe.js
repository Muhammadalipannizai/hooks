import React, {useState} from 'react';
import Example from './UseEffect'
function Remove(){

const [state, setState] = useState(true)
function toggle(event) {
    setState(!state)
}
    return(
        <div>
            <button onClick={toggle}> TOOGLE</button>
            {state && <Example/>}
        </div>
    )

}

export default Remove;