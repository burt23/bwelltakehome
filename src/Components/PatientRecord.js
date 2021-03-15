import { TableRow, TableCell, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  typography: {
    fontFamily: `'Lato', sans-serif !important`,
  },
});

const PatientRecord = ({ record }) => {
  const classes = useStyles();
  const {
    resource: { name = [], birthDate = "n/a", gender = "n/a" },
    fullUrl,
  } = record;
  const { family = "", given = "" } = name[0] || {};
  const builtName = `${given} ${family}`;
  const foundGenderString = gender === "n/a" ? false : true;
  const isFemale =
    foundGenderString && gender.toLowerCase() === "female" ? "F" : "n/a";
  const isMale =
    foundGenderString && gender.toLowerCase() === "male" ? "M" : "n/a";
  const normalizedGender = isFemale || isMale;

  return (
    <TableRow key={name}>
      <TableCell component="th" scope="row" className={classes.typography}>
        {builtName}
      </TableCell>
      <TableCell className={classes.typography} align="right">
        {normalizedGender}
      </TableCell>
      <TableCell className={classes.typography} align="right">
        {birthDate}
      </TableCell>
      <TableCell className={classes.typography} align="right">
        <a alt="showMoreLink" href={fullUrl}>
          Show More
        </a>
      </TableCell>
    </TableRow>
  );
};

export default PatientRecord;
