import React, { useState, useEffect } from 'react';


function Example() {
    // const[windowWidth , setWindow] = useState(window.innerWidth);

    // function handleSize(){
    //    setWindow(window.innerWidth)
    // }
    // useEffect(()=> {
    //          window.addEventListener('resize' , handleSize)
    //          return ()=> {
    //             window.removeEventListener(window.innerWidth)
    //          }
    // } , [])

    const [x, setX] = useState('');
    const [y, setY] = useState('');

    function logMouse(event){
      console.log('log mousemove')
      setX(event.clientX)
      setY(event.clientY)
    }
    useEffect(()=> {
      console.log('useeffect log')
      window.addEventListener('mousemove' , logMouse)
      return ()=>{
        console.log('removed')
        window.removeEventListener('mousemove' , logMouse)
      }
    },[]) 
  return (
   
    <div>
      Hooks X : {x} and Y:{y}

    {/* {windowWidth} */}
    </div>
  )
}
export default Example;