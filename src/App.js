import React from "react";
import Experience from "./components/Experience";
import Education from "./components/Education";

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
      education: {
        schools: [
          {
            school: "University of Houston",
            degree: "BA, Art",
            dateBegan: "Sept 2014",
            dateEnded: "May 2018",
            gpa: "3.5",
          },
          {
            school: "Arizona State University",
            degree: "MSCS",
            dateBegan: "Sept 2028",
            dateEnded: "May 2031",
            gpa: "3.3",
          },
        ],
      },
    };
  }
  render() {
    const { experience, education } = this.state;
    return (
      <main className="resume">
        <Experience data={experience} />
        <Education data={education} />
      </main>
    );
  }
}

export default App;
