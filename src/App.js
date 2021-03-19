import React from "react";
import Experience from "./components/Experience";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {
        jobs: [
          {
            title: "job 1",
          },
          {
            title: "job 2",
          },
          {
            title: "job 3",
          },
          {
            title: "job 4",
          },
        ],
      },
    };
  }
  render() {
    const { experience } = this.state;
    return <Experience data={experience} />;
  }
}

export default App;
