import { Typography, makeStyles, TableRow, TableCell } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "row",
    border: "10px solid cyan",
  },
});
const PatientRecord = ({ record }) => {
  const {
    resource: { name = [], birthdate = "test", gender = "bar" },
    carbs = "yo",
    protein = "fuel",
  } = record;
  const { family, given } = name[0] || {};
  const builtName = `${family}${given}`;
  console.log({ record });
  const classes = useStyles();
  return (
    <TableRow key={name}>
      <TableCell component="th" scope="row">
        {builtName}
      </TableCell>
      <TableCell align="right">{gender}</TableCell>
      <TableCell align="right">{birthdate}</TableCell>
      <TableCell align="right">{carbs}</TableCell>
      <TableCell align="right">{protein}</TableCell>
    </TableRow>
  );
};

export default PatientRecord;
