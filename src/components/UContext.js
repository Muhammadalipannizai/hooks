import React from 'react';
import Comp2 from './Component2';

export const nameContext = React.createContext();
export const ageContext = React.createContext();
function UseCont (){

    return (
        <div>
        <nameContext.Provider value= "Muhammad Ali">
            <ageContext.Provider value= " 24">
                <Comp2/>
            </ageContext.Provider>
            
        </nameContext.Provider>
        </div>
    )
}
export default UseCont;