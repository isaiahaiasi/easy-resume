import React from "react";
import ResumeSection from "./ResumeSection";

class Job extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <ResumeSection
        SectionHeader={() => <p>{data.title}</p>}
        SectionForm={() => (
          <form>
            <input />
          </form>
        )}
      />
    );
  }
}

export default Job;
