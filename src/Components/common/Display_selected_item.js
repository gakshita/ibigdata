import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Owner from "../Owner/owner";
export default function DisplaySelectedItem(props) {
  return (
    <div>
      {props.index == "0" && <Dashboard />}
      {props.index == "1" && <Owner />}
    </div>
  );
}
