import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Home,
  Person,
  AddBox,
  Schedule,
  Assignment,
  MonetizationOn,
  ShoppingCart,
  Folder,
  Group,
  Equalizer,
  Storage,
  AccountCircle,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SelectedListItem(props) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index) => {
    console.log("hiiiiiiii");
    setSelectedIndex(index);

    props.callbackFromParent(index);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        {[
          "Dashboard ",
          "Owner",
          "Owner Followup",
          "Tenant",
          "Tenant Followup",
          "Schedules",
          "Tasks",
          "Masters",
          "Financial",
          "Ecommerce",
          "Users",
          "Imports",
          "Customer Report",
          "Student Report",
          "Database Manager",
        ].map((text, index) => (
          <ListItem
            button
            key={text}
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index)}
            style={{
              borderRight: selectedIndex == index && "5px solid #2196f3 ",
            }}
          >
            <ListItemIcon
              style={{
                color: selectedIndex == index ? "#2196f3 " : "#a6a4e6b8",
              }}
            >
              {index === 0 && <Home />}
              {index === 1 && <Person />}
              {index === 2 && <AddBox />}
              {index === 3 && <Person />}
              {index === 4 && <AddBox />}
              {index === 5 && <Schedule />}
              {index === 6 && <Assignment />}
              {index === 7 && <AccountCircle />}
              {index === 8 && <MonetizationOn />}
              {index === 9 && <ShoppingCart />}
              {index === 10 && <Group />}
              {index === 11 && <Folder />}
              {index === 12 && <Equalizer />}
              {index === 13 && <Equalizer />}
              {index === 14 && <Storage />}
            </ListItemIcon>
            <ListItemText
              primary={text}
              style={{ color: selectedIndex == index ? "black " : "#a6a4e6" }}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
}
