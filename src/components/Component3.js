import React from 'react';
import { nameContext ,ageContext} from './UContext';
function Comp3 (){
    return (
        <div>
           <nameContext.Consumer>
            {
                name => {
                    return (
                        <ageContext.Consumer>
                            {
                                age => {
                                    return (
                                        <div>
                                            My name is {name}    and  My age is {age}
                                        </div>
                                    )
                                }
                            }
                        </ageContext.Consumer>
                    )
                }
            }
           </nameContext.Consumer>
        </div>
    )
}
export default Comp3;