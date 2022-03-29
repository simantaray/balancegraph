import React from "react";
import "../App.css"
import { Chart as ChartJS, registerables } from 'chart.js';

import { Line } from "react-chartjs-2";
ChartJS.register(...registerables);


export default function App() {
    const data = {
        labels: ["1", "2", "3", "4", "5", "6","7","8","9","10","11","12"],
        datasets: [
          {
            label: "Balance monthwise",
            data: [5000, 4005, 3005, 2001, 1054, 76],
            fill: false,
            borderColor: "#22A7F0"
          }
        ]
      };
  return (
    <div className="graph1">
      <Line className="graph2" data={data} />
    </div>
  );
}