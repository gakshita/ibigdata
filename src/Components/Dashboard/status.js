import React from "react";
import Grid from "@material-ui/core/Grid";
import Chart1 from "./charts/pie_chart1";

function Component(props) {
  return (
    <div className="Box">
      <Chart1 align="center" />

      <h4 style={{ textAlign: "center", margin: "5% 20% " }}>
        Converted Tenant
      </h4>
    </div>
  );
}

export default function Status() {
  return (
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3} style={{ color: "black" }}>
        <Component />
      </Grid>
      <Grid item xs={12} sm={6} md={3} style={{ color: "black" }}>
        <Component />
      </Grid>
      <Grid item xs={12} sm={6} md={3} style={{ color: "black" }}>
        <Component />
      </Grid>
      <Grid item xs={12} sm={6} md={3} style={{ color: "black" }}>
        <Component />
      </Grid>
    </Grid>
  );
}
