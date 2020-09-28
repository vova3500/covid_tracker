import React from "react";
import { Bar } from "react-chartjs-2";

import "./graph.css";

const Graph = ({ data: { confirmed, recovered, deaths }, country }) => {
  return (
    <div className="graph">
      {confirmed ? (
        <Bar
          data={{
            labels: ["Infected", "Recovered", "Deaths"],
            datasets: [
              {
                label: "People",
                backgroundColor: [
                  "rgba(0, 0, 255, 0.5)",
                  "rgba(0, 255, 0, 0.5)",
                  "rgba(255, 0, 0, 0.5)",
                ],
                data: [confirmed.value, recovered.value, deaths.value],
              },
            ],
          }}
          options={{
            legend: { display: false },
            title: { display: true, text: `Current state in ${country}` },
          }}
        />
      ) : null}
    </div>
  );
};

export default Graph;
