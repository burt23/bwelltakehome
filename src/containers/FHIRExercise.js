import { CircularProgress, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import fetchData from "../fetchData";
import PatientRecord from "../Components/PatientRecord";

const url = "http://hapi.fhir.org/baseR4/Patient?_format=json";

function FHIRExercise() {
  const [data, setData] = useState();
  const { entry = [] } = data || {};
  const hasEntries = !!entry.length;

  useEffect(() => {
    async function initialize() {
      const d = await fetchData(url);
      console.log("setting data fetch", d);
      setData(d);
    }
    initialize();
  }, []);
  console.log("hasEntries?", hasEntries);
  console.log("render", data);

  return (
    <>
      <Typography variant="h2" gutterBottom>
        FHIRExercise
      </Typography>
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
    </>
  );
}
export default FHIRExercise;
