import React from "react";
import { Clear } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";

export default function Filters(props) {
  return (
    <div className="Box ">
      <h3>Filters</h3>
      <IconButton
        aria-label="Email"
        style={{ float: "right", color: "black" }}
        onClick={() => props.filters(false)}
      >
        <Clear />
      </IconButton>
      <style>
        {`
          .overlay {
              width:"100%";
              height:"100%";
            background:red;
            // transition: opacity 500ms;
            // visibility: hidden;
            // opacity: 0;
          }`}
      </style>
    </div>
  );
}
