import ResumeSection from "./ResumeSection";

import React from "react";
import ResumeList from "./ResumeList";
import Job from "./Job";

class Experience extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <ResumeSection
        SectionHeader={() => <p>Experience</p>}
        SectionForm={() => (
          <form>
            <input />
          </form>
        )}
        SectionList={() => (
          <ResumeList>
            {data.jobs.map((child) => (
              <Job data={child} />
            ))}
          </ResumeList>
        )}
      />
    );
  }
}

export default Experience;
