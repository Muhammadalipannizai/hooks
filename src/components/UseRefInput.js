import React,{useRef, useEffect} from 'react'

function UseRefInputfocus() {
    const inputFocus = useRef(null)
    useEffect(()=>{
        inputFocus.current.focus()
    },[])

  return (
    <div>
    <input ref = {inputFocus} type= "text"></input>
    
    </div>
  )
}

export default UseRefInputfocus