import React, {useReducer, useEffect } from 'react'
import axios from 'axios'

const initialState = {
    loading : true,
    error : '',
    post: {}
}
const reducer = ( state, action)=> {
            switch( action.type){
                case 'Fetch_Success':
                return {
                    loading: false,
                    error : '',
                    post : action.payload
                     
                }
                case 'Fetch_error':
                   return {
                        loading : false,
                        post:{},
                        error : 'some is happening'
                    }
                default:
                    return state
            }
}
function DataUseReduce ()
{
    const [fetch , dispatch ] = useReducer(reducer, initialState)

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
        .then(
            response=> {
                dispatch({type :'Fetch_Success', payload:response.data} )
            }
        )
        .catch( error=> {
            dispatch( {type : 'Fetch_error'})
        })
    } ,[])
    return (
      <div>
            {fetch.loading? 'loading':  fetch.post.title}
           {
            fetch.error ? fetch.error: null
           }

      </div>
    )
  }


export default DataUseReduce;