
import React, {useState} from "react";
import Monthly from "./Monthly";
function Balance() {
    // const balances=[500,5000];
    const [count,setCount]= useState(0)
    const [balance, setBalance] = useState(0);
    const [initialBalance,setInitialBalance]=useState(0);
    const [arrBalance,setArrBalance]=useState([]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      setCount(count+1);
      setInitialBalance(initialBalance+parseInt(balance));
      setArrBalance(preArray=>[...preArray,parseInt(balance)]);
    }
    return (
      <div className="App">
        <h1>count:{count}</h1>
        <form onSubmit={handleSubmit}>
        <label>Balance:
          <input 
            type="number" 
            onChange={(e) => setBalance(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      {arrBalance.map(b=>
        <p key={b.index} >{b}</p>
      )}
      
      <Monthly initialBalance={initialBalance}/>
      </div>
    );
}

export default Balance