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
            title: "Call Center Agent",
            company: "Aperture",
            dateStarted: "Jan 1970",
            dateEnded: "Dec 1970",
            responsibilities: [
              "took out the trash",
              "cleaned the dishes",
              "wiped down the tables",
            ],
          },
          {
            id: "eawgggggaga",
            title: "job 2",
            company: "random company name",
            dateStarted: "Jan 1970",
            dateEnded: "Dec 1970",
          },
          {
            id: "cxzvczvcxz",
            title: "job 3",
            company: "random company name",
            dateStarted: "Jan 1970",
            dateEnded: "Dec 1970",
          },
          {
            id: "kuuytrjr",
            title: "job 4",
            company: "random company name",
            dateStarted: "Jan 1970",
            dateEnded: "Dec 1970",
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
