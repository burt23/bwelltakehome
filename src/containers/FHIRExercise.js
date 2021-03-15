import {
  CircularProgress,
  Typography,
  makeStyles,
  Paper,
} from "@material-ui/core";
import { useEffect, useState } from "react";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import fetchData from "../fetchData";
import MUITable from "../Components/MUITable";
import PatientRecordsMobile from "../Components/PatientRecordsMobile";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: "3rem",
  },
  paper: {
    padding: "3rem",
    minWidth: "400px",
  },
  title: {
    fontSize: "1.75rem",
    color: "#2E3586",
    fontFamily: `'Lato', sans-serif !important`,
  },
  patientData: {
    fontFamily: `'Lato', sans-serif !important`,
    color: "#2E3586",
    textAlign: "center",
  },
});

const url = "http://hapi.fhir.org/baseR4/Patient?_format=json";

function FHIRExercise() {
  const [data, setData] = useState();
  const { entry = [] } = data || {};
  const hasEntries = !!entry.length;
  const classes = useStyles();
  const theme = useTheme();
  const desktopView = useMediaQuery(theme.breakpoints.up("md"));
  const renderEntries = desktopView ? (
    <MUITable records={entry} />
  ) : (
    entry.map((record) => <PatientRecordsMobile record={record} />)
  );

  useEffect(() => {
    async function initialize() {
      const d = await fetchData(url);
      setData(d);
    }
    initialize();
  }, []);

  return (
    <div className={classes.root}>
      <Typography variant="h2" gutterBottom className={classes.title}>
        FHIRExercise
      </Typography>
      <Paper className={classes.paper} elevation={3} square>
        <Typography variant="h6" gutterBottom className={classes.patientData}>
          Patient Data
        </Typography>
        {hasEntries ? renderEntries : <CircularProgress />}
      </Paper>
    </div>
  );
}
export default FHIRExercise;
