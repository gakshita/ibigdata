import React from "react";
import Typography from "@material-ui/core/Typography";
import Status from "./status";
import FollowUpChart from "./charts/followup_chart";
import Fg from "./charts/revenue";

import Grid from "@material-ui/core/Grid";
import Daily_update from "./daily_update";
import Performance from "./charts/performance";

export default function Dashboard() {
  return (
    <div>
      <div
        style={{
          display: "flex",
        }}
      >
        <h1
          style={{
            margin: 0,
          }}
        >
          Dashboard
        </h1>
        <h3
          style={{
            color: "#2196f3 ",
            margin: "6px 14px",
          }}
        >
          Reports & Statistics
        </h3>
      </div>

      <Status />
      <FollowUpChart title={"Ownwer"} />
      <FollowUpChart title={"Tenant"} />

      <Grid container spacing={4}>
        <Grid item xs={12} lg={7}>
          <Fg title={"Converted"} />
        </Grid>
        <Grid item xs={12} lg={5}>
          <Daily_update title={"Meetings"} />
        </Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item xs={12} lg={7}>
          <Fg title={"Revenue"} />
        </Grid>
        <Grid item xs={12} lg={5}>
          <Daily_update title={"Follow Ups"} />
        </Grid>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Performance title={"Telecaller Team"} />
        </Grid>
        <Grid item xs={12} md={6}>
          <Performance title={"Marketing Team"} />
        </Grid>
      </Grid>
    </div>
  );
}
