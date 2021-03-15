import { TableRow, TableCell } from "@material-ui/core";

const PatientRecord = ({ record }) => {
  const {
    resource: { name = [], birthDate = "n/a", gender = "n/a" },
    fullUrl,
  } = record;
  const { family = "", given = "" } = name[0] || {};
  const builtName = `${given} ${family}`;

  return (
    <TableRow key={name}>
      <TableCell component="th" scope="row">
        {builtName}
      </TableCell>
      <TableCell align="right">{gender}</TableCell>
      <TableCell align="right">{birthDate}</TableCell>
      <TableCell align="right">
        <a alt="showMoreLink" href={fullUrl}>
          Show More
        </a>
      </TableCell>
    </TableRow>
  );
};

export default PatientRecord;
