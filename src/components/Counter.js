import React, { useState, useEffect } from 'react';

function Counter(){
const [ count, setCount] = useState(0);
 function inCrement(){
    setCount(count+1);
 }
 useEffect(()=> {
   document.title = `you cliked ${count} times`
 }, [count])
//  function reSet(){
//     setCount(0)
//  }
//  function deCrement(){
//     setCount(count-1)
 
    return(
        <div>
        <h1> {count}</h1>
            <button onClick={inCrement}> increase</button>
            {/* <button onClick={deCrement}> decrease</button>
            <button onClick={reSet}> Reset</button> */}
        </div>
    )

         }

// UseEffect hook in react


// const [status, setStatus] = useState('post');
// const [ali , setAli] = useState([]);

// useEffect( ()=> {
//    fetch(`https://jsonplaceholder.typicode.com/${status}`)
//       .then(response => response.json())
//       .then(json => setAli(json))}, 
//       [ status])

// return (
//    <div>
//       <button onClick={ () => setStatus("posts")}> Post</button>
//       <button onClick={ () => setStatus("users")}> User</button>
//       <button onClick={ () => setStatus("comments")}> comments</button>

//       <h1>
//          {status}
//       </h1>

//       {ali.map( prev => {
//          return <pre> {JSON.stringify(prev)}</pre>
//       })}
//    </div>
// )




//  Another example of useEffect hook  






export default Counter;