import React from "react";
import My_table from "../common/table2";
import { My_form } from "./form";

export default function Owner() {
  const [formDisplay, setFormDisplay] = React.useState(false);

  const closeForm = () => {
    setFormDisplay(false);
  };
  return (
    <div>
      <h1>Owner</h1>

      {formDisplay == false && (
        <button
          className="btn"
          style={{
            float: "right",
          }}
          onClick={() => {
            setFormDisplay(true);
            console.log("hey");
          }}
        >
          Add New
        </button>
      )}
      {formDisplay ? (
        <My_form close={closeForm} />
      ) : (
        <div className="Box">
          <My_table title="Owner Table" />
        </div>
      )}
    </div>
  );
}
