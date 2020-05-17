import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Notifications from "@material-ui/icons/Notifications";
import AccountCircle from "@material-ui/icons/AccountCircle";
import { blue } from "@material-ui/core/colors";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "@material-ui/core/Typography";
import SelectedListItem from "./drawer_items.js";
import DisplaySelectedItem from "./Display_selected_item";
import "./../../styles/appBar.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "white",
    padding: "3px",
  },
  drawer: {
    boxShadow: " 0 8px 6px -6px black",
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    boxShadow: " 0 8px 6px -6px black",
    width: 250,
    overflow: "auto",
    height: "100%",
    [theme.breakpoints.up("md")]: {
      overflow: "auto",
      width: drawerWidth,
      position: "relative",
      height: "100%",
    },
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [activeItem, setActiveItem] = React.useState(0);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  const myCallback = (dataFromChild) => {
    console.log("hii", dataFromChild);
    setActiveItem(dataFromChild);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Grid container spacing={4}>
            <Grid item xs={4} sm={6} md={8} lg={9} style={{ color: "black" }}>
              <img
                src={require("./../../assets/logoo.png")}
                style={{ width: "161px" }}
              />
            </Grid>
            <Grid item xs={0} style={{ paddingTop: 26 }}>
              <Hidden only="xs">
                <Notifications style={{ color: blue[500] }} size={50} />
              </Hidden>
            </Grid>
            <Grid item style={{ paddingTop: 26 }}>
              <a
                href="/"
                onClick={() => localStorage.clear()}
                style={{ color: "#bebcc7", textDecoration: "none" }}
              >
                Quick add
              </a>
            </Grid>
            <Grid item style={{ color: "#bebcc7", paddingTop: 26 }}>
              <Grid container spacing={0.8} className="dropdown">
                <Grid item>
                  <AccountCircle style={{ color: blue[500] }} size={50} />
                  <a
                    href="/"
                    onClick={() => localStorage.clear()}
                    className="dropbtn"
                  >
                    User
                  </a>
                  <div class="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Logout</a>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <SelectedListItem callbackFromParent={myCallback} />
        </div>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        <DisplaySelectedItem index={activeItem} />
        {/* <Typography>{activeItem}</Typography> */}
      </main>
    </div>
  );
}
