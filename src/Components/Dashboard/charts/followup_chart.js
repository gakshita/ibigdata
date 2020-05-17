import React from "react";
import Example from "./pie_chart";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Chart1 from "./pie_chart1";
import Chart from "./pie_chart3";

export default class FollowUpChart extends React.Component {
  render() {
    return (
      <div className="Box">
        <h2>{this.props.title} Follow Up</h2>

        <Grid container style={{ margin: "10px" }}>
          <Grid item xs={12} lg={5} style={{ margin: "5px 40px" }}>
            <Example />
          </Grid>
          <Grid item xs={12} lg={5} style={{ margin: "5px 40px" }}>
            <Chart />
          </Grid>
        </Grid>
      </div>
    );
  }
}
