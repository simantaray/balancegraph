import React, { useState } from "react";
import Graph from "./Graph"
export default function Monthly({initialBalance}) {
  const [monthly, setMonthly] = useState(1);
    const[data,setData]=useState();
  const array=[];
  
 
  const handleSubmit = (event) => {
    event.preventDefault();
   // setArray(oldArray => [...oldArray, 10]);

    
    while(1<=initialBalance){
       
        
         initialBalance=initialBalance-monthly;
         console.log(initialBalance)
        //  setData(initialBalance)
         array.push(initialBalance)
   
    }

    
  };
  
  return (
    <div>
        <Graph array={array}/>
        <h1>initialalance:{initialBalance}</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Balance:
          <input type="number" onChange={(e) => setMonthly(e.target.value)} />
        </label>
        <button>Submit</button>
      </form>
      
      
    </div>
  );
}
