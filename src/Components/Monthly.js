import React, { useState } from "react";
import Graph from "./Graph"
export default function Monthly({initialBalance}) {
  const [monthly, setMonthly] = useState(0);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  const [array, setArray] = useState([])
  return (
    <div>
        <Graph />
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
