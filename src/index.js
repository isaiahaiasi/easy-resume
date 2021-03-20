import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import Resume from "./Resume";
import data from "./demo-data-nested.json";

ReactDOM.render(
  <React.StrictMode>
    <Resume data={data} />
  </React.StrictMode>,
  document.getElementById("root")
);
