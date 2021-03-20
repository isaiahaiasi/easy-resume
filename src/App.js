import React from "react";
import Experience from "./components/Experience";
import Education from "./components/Education";
import GeneralInfo from "./components/GeneralInfo";

import "./styles/resume.css";
import "./styles/utilities.css";

import data from "./demo-data-nested.json";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = data;
  }
  render() {
    const { generalInfo, experience, education } = this.state;
    return (
      <main className="resume">
        <GeneralInfo data={generalInfo} />
        <Experience data={experience} />
        <Education data={education} />
      </main>
    );
  }
}

export default App;
