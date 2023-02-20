import React, {useState, useCallback} from 'react';
import Button from './ButtonCallback';
import Output from './OutputCallback';
function CallBack(){
    const [age , setAge] = useState(25);
    const [ salary , setSalary] = useState(25000);

     const increment = useCallback(() => {
        setAge( prevAge => prevAge +2);
     }, [age]);


       const  decrement = useCallback( () =>{ 
        setSalary( prevSal => prevSal +2000);
     },[salary])
    
    return (
        <div>
      
       <Output ageOut = {age} text = "Age"/>
      
       <Button type = "submit" whenClick = {increment} value ="Age"/>
       <Output ageOut = {salary} text ="Salary"/>
       <Button  type= "submit " whenClick = {decrement} value = "Salary"/>  
        </div>
    )
}
export default CallBack;
