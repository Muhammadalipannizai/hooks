// import React, {useReducer} from 'react';

// // useReducer hook for single state object  
// const initialState = 0;
// const reducer = (state , action)=> {
//     switch(action){
//         case 'increment':
//             return state +1;
//         case 'decrement':
//             return state-1;
//         case 'reset':
//             return initialState;
//         default:
//             return state
//     }
// }
// function Reduce(){
//       const [count , dispatch]=  useReducer(reducer , initialState);
//     return (
//         <div>
//                 <h1> {count}</h1>
//             <button onClick={()=> dispatch('increment')}>Increment</button>
//             <button onClick={ ()=>dispatch('decrement')}>Decrement</button>
//             <button onClick={()=>dispatch('reset')}>Reset</button>
//         </div>
//     )
// }
// export default Reduce;



import React, {useReducer} from 'react';

// multiple useReducer hook for single state object  
const initialState = 0;
const reducer = (state , action)=> {
    switch(action){
        case 'increment':
            return state +1;
        case 'decrement':
            return state-1;
        case 'reset':
            return initialState;
        default:
            return state
    }
}
function Reduce(){
      const [count , dispatch]=  useReducer(reducer , initialState);
      const [ count2, dispatch2] = useReducer(reducer, initialState);
    return (
        <div>
                <h1> {count}</h1>
            <button onClick={()=> dispatch('increment')}>Increment</button>
            <button onClick={ ()=>dispatch('decrement')}>Decrement</button>
            <button onClick={()=>dispatch('reset')}>Reset</button>

            <div>
                <h1> {count2}</h1>
            <button onClick={()=> dispatch2('increment')}>Increment</button>
            <button onClick={ ()=>dispatch2('decrement')}>Decrement</button>
            <button onClick={()=>dispatch2('reset')}>Reset</button>
        </div>
        </div>
    )
}
export default Reduce;