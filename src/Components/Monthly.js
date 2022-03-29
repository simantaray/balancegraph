import React, { useState } from "react";
import Graph from "./Graph";
export default function Monthly({ initialBalance }) {
  const [monthly, setMonthly] = useState(1);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Graph initialBalance={initialBalance} monthly={monthly} />
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
