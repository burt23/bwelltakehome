import {
  CircularProgress,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import fetchData from "../fetchData";
import PatientRecord from "../Components/PatientRecord";
const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paper: {
    padding: "3rem",
  },
});

const url = "http://hapi.fhir.org/baseR4/Patient?_format=json";

function FHIRExercise() {
  const [data, setData] = useState();
  const { entry = [] } = data || {};
  const hasEntries = !!entry.length;
  const classes = useStyles();

  useEffect(() => {
    async function initialize() {
      const d = await fetchData(url);
      console.log("setting data fetch", d);
      setData(d);
    }
    initialize();
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom>
        FHIRExercise
      </Typography>
      <Paper className={classes.paper} elevation={3} square>
        <Typography variant="h6" gutterBottom>
          Patient Data
        </Typography>
        {hasEntries ? (
          entry.map((record) => (
            <PatientRecord record={record} key={record.resource.id} />
          ))
        ) : (
          <CircularProgress />
        )}
      </Paper>
    </div>
  );
}
export default FHIRExercise;
