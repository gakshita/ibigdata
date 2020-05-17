import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import { ArrowBack } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
export function My_form(props) {
  const classes = useStyles();

  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <div
      style={{
        margin: "20px auto",
        backgroundColor: "white",
        boxShadow: "rgba(195, 201, 204, 0.65) 0px 0px 13px -1px",
        padding: "20px",
        borderRadius: "30px",
      }}
    >
      <IconButton
        aria-label="Email"
        style={{ color: "black", float: "left" }}
        onClick={() => props.close()}
      >
        <ArrowBack />
      </IconButton>
      <h3>Add Owner Information</h3>
      <form className={classes.root} noValidate autoComplete="off">
        <Grid
          container
          spacing={4}
          alignItems="center"
          justify="center"
          style={{ flexGrow: 1, marginTop: "20px" }}
        >
          <Grid item xs={12} lg={5} xl={6}>
            <TextField
              id="outlined-Campaign"
              select
              label="Campaign"
              value={currency}
              onChange={handleChange}
              helperText="Please select your Campaign"
              variant="outlined"
              style={{ width: "400px" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} lg={5} xl={6}>
            <TextField
              id="outlined-Property-Type"
              select
              label="Property Type"
              value={currency}
              onChange={handleChange}
              helperText="Please select your Property Type"
              variant="outlined"
              style={{ width: "400px" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} lg={5} xl={6}>
            <TextField
              id="outlined-basic"
              label="Contact No"
              variant="outlined"
              style={{ width: "400px" }}
            />
          </Grid>
          <Grid item xs={12} lg={5} xl={6}>
            <TextField
              id="outlined-basic"
              label="Name"
              variant="outlined"
              style={{ width: "400px" }}
            />
          </Grid>
          <Grid item xs={12} lg={5} xl={6}>
            <TextField
              id="outlined-City"
              select
              label="City"
              value={currency}
              onChange={handleChange}
              helperText="Please select your City"
              variant="outlined"
              style={{ width: "400px" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} lg={5} xl={6}>
            <TextField
              id="outlined-Location"
              select
              label="Location"
              value={currency}
              onChange={handleChange}
              helperText="Please select your Location"
              variant="outlined"
              style={{ width: "400px" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} lg={5} xl={6}>
            <TextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              style={{ width: "400px" }}
            />
          </Grid>
          <Grid item xs={12} lg={5} xl={6}>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              style={{ width: "400px" }}
            />
          </Grid>
          <Grid item xs={12} lg={5} xl={6}>
            <TextField
              id="outlined-Budget"
              select
              label="Budget"
              value={currency}
              onChange={handleChange}
              helperText="Please select your Budget"
              variant="outlined"
              style={{ width: "400px" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} lg={5} xl={6}>
            <TextField
              id="outlined-Facilities"
              select
              label="Facilities"
              value={currency}
              onChange={handleChange}
              helperText="Please select your Facilities"
              variant="outlined"
              style={{ width: "400px" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} lg={5} xl={6}>
            <TextField
              id="outlined-Reference-Id"
              select
              label="Reference Id"
              value={currency}
              onChange={handleChange}
              helperText="Please select your Reference Id"
              variant="outlined"
              style={{ width: "400px" }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} lg={5} xl={6}>
            <TextField
              id="outlined-Description"
              label="Description"
              multiline
              rows={4}
              defaultValue="This is Description"
              variant="outlined"
              style={{ width: "400px" }}
            />
          </Grid>
        </Grid>
        <div>
          <button className="btn" style={{ marginLeft: "50% " }}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
