import ResumeList from "./ResumeList";
import School from "./School";

const Education = ({ data }) => {
  return (
    <section className="resume-section education">
      <p className="resume-section__header">Education</p>
      <ResumeList
        className="no-indent"
        dataList={data.schools}
        renderItem={(child) => <School data={child} />}
      />
    </section>
  );
};

export default Education;
