import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Wrapper from "./Components/Wrapper";
import FHIRExercise from "./containers/FHIRExercise";

const url = "http://hapi.fhir.org/baseR4/Patient?_format=json";

const fetchData = async () => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

function App() {
  const [data, setData] = useState();
  useEffect(() => {
    async function getData() {
      const d = await fetchData();
      setData(d);
    }
    getData();
  }, []);

  return (
    <Wrapper>
      <FHIRExercise />
    </Wrapper>
  );
}

export default App;
