import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

const data01 = [{ name: "Group A", value: 400 }];
const data02 = [{ name: "Group B", value: 100 }];
const data03 = [{ name: "Group C", value: 200 }];

function Label(props) {
  return (
    <div style={{ display: "flex", marginRight: "10px" }}>
      <div
        style={{ backgroundColor: props.color, height: "15px", width: "15px" }}
      ></div>
      <h4
        style={{
          margin: "-2px 5px",
        }}
      >
        : {props.title[0].name}
      </h4>
    </div>
  );
}

export default class Chart extends React.Component {
  render() {
    return (
      <div>
        <PieChart width={350} height={320}>
          <Pie
            data={data02}
            dataKey="value"
            cx={130}
            cy={200}
            outerRadius={90}
            fill="#c3b2d1"
            label
          />
          <Pie
            data={data03}
            dataKey="value"
            cx={200}
            cy={100}
            outerRadius={90}
            fill="#ff895d"
            label
          />
          <Pie
            data={data01}
            dataKey="value"
            cx={250}
            cy={200}
            outerRadius={60}
            fill="#fc5185"
            label
          />
        </PieChart>
        <div style={{ display: "flex" }}>
          <Label color={"#fc5185"} title={data01} />
          <Label color={"#c3b2d1"} title={data02} />
          <Label color={"#ff895d"} title={data03} />
        </div>
      </div>
    );
  }
}
