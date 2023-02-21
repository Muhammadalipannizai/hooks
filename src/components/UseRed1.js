import React, {useReducer} from 'react';

// for multiple state objects ,  state and action of reducer function will be used as objects by specifying their properties

const initialState = {
    firstCounter :0,
    secondCounter : 10
}
const reducer = (state , action ) => {
    switch ( action.type){
        case 'increment':
            return { ...state, firstCounter : state.firstCounter + action.value}
        case 'decrement':
            return { ...state, firstCounter : state.firstCounter - action.value}

        case 'incrementobj2':
                return {  ...state, secondCounter : state.secondCounter + action.value}
         case 'decrementobj2':
                return {  ...state,secondCounter : state.secondCounter - action.value}
         case 'reset':
            return initialState
        default:
            return state
    }
}

function Counter1(){

    const [count , dispatch]=  useReducer(reducer , initialState);
    return (
        <div>
        <h1> {count.firstCounter}</h1>
            <button onClick={()=> dispatch({type : 'increment', value: 1})}>
            Increment
            </button>
            <button onClick={ ()=>dispatch({type : 'decrement' , value : 1})}>
            Decrement
            </button> 
            <button onClick={()=> dispatch({type : 'increment', value: 5})}>
            Increment 5
            </button>
            <button onClick={ ()=>dispatch({type : 'decrement' , value : 5})}>
            Decrement 5
            </button> <br/>

            <h1> {count.secondCounter}</h1>
            <button onClick={()=> dispatch({type : 'incrementobj2', value: 1})}>
            Increment object 2
            </button>
            <button onClick={ ()=>dispatch({type : 'decrementobj2' , value : 1})}>
            Decrement object 2
            </button>
            <button onClick={()=>dispatch({type : 'reset'})}>
            Reset
            </button>
        </div>
    )
}
export default Counter1;