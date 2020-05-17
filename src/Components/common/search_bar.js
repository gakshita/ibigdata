import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Search } from "@material-ui/icons";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <form
      className={classes.root}
      noValidate
      autoComplete="off"
      style={{ display: "inline-block", margin: " 0 67px" }}
    >
      <div style={{ display: "flex" }}>
        <Search style={{ marginTop: "20px" }} />
        <TextField
          id="standard-basic"
          label="Search..."
          style={{ marginLeft: "10px" }}
        />
      </div>
    </form>
  );
}
