import React from "react";
import { PieChart, Pie, Label, Cell } from "recharts";

const data = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 800 },
];
const COLORS = ["#3f51b5", "#e0dfe5"];

export default class Chart1 extends React.Component {
  render() {
    return (
      <PieChart
        width={100}
        height={90}
        onMouseEnter={this.onPieEnter}
        style={{ margin: "5% 20%" }}
      >
        <Pie
          data={data}
          cx={40}
          cy={50}
          innerRadius={20}
          outerRadius={30}
          fill="#8884d8"
          paddingAngle={2}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label
            value="7"
            position="center"
            style={{ fill: "#2196f3", fontSize: "20px" }}
          />
        </Pie>
      </PieChart>
    );
  }
}
