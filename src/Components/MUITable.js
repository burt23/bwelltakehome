import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import PatientRecord from "./PatientRecord";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  header: {
    background: "#e0e0e0",
  },
  typography: {
    fontFamily: `Lato, sans-serif !important`,
  },
});

export default function MUITable({ records }) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead className={classes.header}>
          <TableRow>
            <TableCell className={classes.typography}>Patient Name</TableCell>
            <TableCell className={classes.typography} align="right">
              Sex at Birth
            </TableCell>
            <TableCell className={classes.typography} align="right">
              Date of Birth
            </TableCell>
            <TableCell className={classes.typography} align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((record) => (
            <PatientRecord record={record} key={record.resource.id} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
