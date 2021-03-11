import { Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import fetchData from "../fetchData";

const url = "http://hapi.fhir.org/baseR4/Patient?_format=json";

function FHIRExercise() {
  const [data, setData] = useState();
  useEffect(() => {
    async function initialize() {
      const d = await fetchData(url);
      setData(d);
    }
    initialize();
  }, []);
  return (
    <>
      <Typography variant="h2" gutterBottom>
        FHIRExercise
      </Typography>
      <Typography variant="h6" gutterBottom>
        Patient Data
      </Typography>
    </>
  );
}
export default FHIRExercise;
