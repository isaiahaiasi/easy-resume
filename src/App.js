import React from "react";
import Experience from "./components/Experience";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      experience: {
        jobs: [
          {
            id: "afeaewfawfa",
            title: "job 1",
            responsibilities: [
              "took out the trash",
              "cleaned the dishes",
              "wiped down the tables",
            ],
          },
          {
            id: "eawgggggaga",
            title: "job 2",
          },
          {
            id: "cxzvczvcxz",
            title: "job 3",
          },
          {
            id: "kuuytrjr",
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
