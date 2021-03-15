import {
  CircularProgress,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import fetchData from "../fetchData";
import MUITable from "../Components/MUITable";

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
        {hasEntries ? <MUITable records={entry} /> : <CircularProgress />}
      </Paper>
    </div>
  );
}
export default FHIRExercise;
