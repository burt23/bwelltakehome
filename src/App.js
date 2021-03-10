import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
