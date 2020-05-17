import React from "react";

import AccountCircle from "@material-ui/icons/AccountCircle";
const data = [
  { name: "Group C", value: "2:00" },
  { name: "Group C", value: "2:00" },
  { name: "Group C", value: "2:00" },
  { name: "Group C", value: "2:00" },
];
export default class Daily_update extends React.Component {
  render() {
    return (
      <div className="Box">
        <h2> Todays {this.props.title}</h2>
        {data.map((val) => (
          <div
            style={{
              borderBottom: "0.5px solid #bebcc7 ",
              padding: "8px 0px",
              display: "flex",
            }}
          >
            <AccountCircle style={{ color: "#ff895d", fontSize: "32px" }} />
            <div>
              <h4 style={{ margin: "0px 10px" }}>{val.name}</h4>
              <p style={{ color: "#2196f3", margin: "0px 10px" }}>
                {val.value}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
