import React , {useContext} from 'react';

import { nameContext, ageContext } from './UContext';
function Comp2(){

   const myName =  useContext(nameContext)
   const myAge = useContext(ageContext)
    return (
        <div>
            my name is {myName} and my age is {myAge}
        </div>
    )
}
export default Comp2