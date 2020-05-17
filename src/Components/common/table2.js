import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import FilterListIcon from "@material-ui/icons/FilterList";
import { Sms, Update, Delete, Email, Add, Edit } from "@material-ui/icons";
import BasicTextFields from "./search_bar";
import Filters from "./../Owner/filter.js";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(SNo, Name, Campaign, Category, Contact, Assign, Date) {
  return { SNo, Name, Campaign, Category, Contact, Assign, Date };
}

const rows = [
  createData(
    1,
    "Akshita Goyal",
    "Rent",
    "3BHK",
    248754453,
    "Sharan Goyal",
    "25-02-2020"
  ),
  createData(
    2,
    "Akshita Goyal",
    "Rent",
    "3BHK",
    248754453,
    "Sharan Goyal",
    "25-02-2020"
  ),
  createData(
    3,
    "Akshita Goyal",
    "Rent",
    "3BHK",
    248754453,
    "Sharan Goyal",
    "25-02-2020"
  ),
  createData(
    4,
    "Akshita Goyal",
    "Rent",
    "3BHK",
    248754453,
    "Sharan Goyal",
    "25-02-2020"
  ),
  createData(
    5,
    "Akshita Goyal",
    "Rent",
    "3BHK",
    248754453,
    "Sharan Goyal",
    "25-02-2020"
  ),
  createData(
    6,
    "Akshita Goyal",
    "Rent",
    "3BHK",
    248754453,
    "Sharan Goyal",
    "25-02-2020"
  ),
  createData(
    7,
    "Akshita Goyal",
    "Rent",
    "3BHK",
    248754453,
    "Sharan Goyal",
    "25-02-2020"
  ),
  createData(
    8,
    "Akshita Goyal",
    "Rent",
    "3BHK",
    248754453,
    "Sharan Goyal",
    "25-02-2020"
  ),
  createData(
    9,
    "Akshita Goyal",
    "Rent",
    "3BHK",
    248754453,
    "Sharan Goyal",
    "25-02-2020"
  ),
  createData(
    10,
    "Akshita Goyal",
    "Rent",
    "3BHK",
    248754453,
    "Sharan Goyal",
    "25-02-2020"
  ),
];

function Header(props) {
  return (
    <div style={{ marginBottom: "100px" }}>
      <h3 style={{ display: "inline-block" }}>{props.title}</h3>
      <BasicTextFields />
      <div style={{ marginTop: "-50px" }}>
        <Tooltip title="Delete">
          <IconButton aria-label="Delete" className="icon-btn">
            <Delete />
          </IconButton>
        </Tooltip>
        <Tooltip title="Email">
          <IconButton aria-label="Email" className="icon-btn">
            <Email />
          </IconButton>
        </Tooltip>
        <Tooltip title="Sms">
          <IconButton aria-label="Sms" className="icon-btn">
            <Sms />
          </IconButton>
        </Tooltip>
        <Tooltip title="Update">
          <IconButton aria-label="Update" className="icon-btn">
            <Update />
          </IconButton>
        </Tooltip>
        <Tooltip title="Filter">
          <IconButton
            aria-label="Filter"
            className="icon-btn"
            onClick={() => props.filters(true)}
          >
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </div>
      <style>
        {`
          .icon-btn{
            color: #5e8bc4; float: right;
          }
      `}
      </style>
    </div>
  );
}

export default function My_table(props) {
  const classes = useStyles();
  const [filterBox, showFilterBox] = React.useState(false);

  return (
    <div>
      <Header title={props.title} filters={showFilterBox} />
      {filterBox === true && <Filters filters={showFilterBox} />}
      <TableContainer
        components={{
          Container: (props) => <Paper {...props} elevation={0} />,
        }}
      >
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox style={{ color: "#5e8bc4" }} />
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#c8c6cf" }}>
                Name
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#c8c6cf" }}>
                Campaign
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#c8c6cf" }}>
                Category
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#c8c6cf" }}>
                Contact
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#c8c6cf" }}>
                Assign To
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#c8c6cf" }}>
                Date
              </TableCell>
              <TableCell style={{ fontWeight: "bold", color: "#c8c6cf" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell padding="checkbox">
                  <Checkbox style={{ color: "#5e8bc4" }} />
                </TableCell>
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>
                <TableCell>{row.Campaign}</TableCell>
                <TableCell>{row.Category}</TableCell>
                <TableCell>{row.Contact}</TableCell>
                <TableCell>{row.Assign}</TableCell>
                <TableCell>{row.Date}</TableCell>
                <TableCell>
                  <IconButton aria-label="Filter">
                    <Add />
                  </IconButton>
                  <IconButton aria-label="Filter">
                    <Edit />
                  </IconButton>
                  <IconButton aria-label="Filter">
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
