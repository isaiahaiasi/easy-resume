import ResumeList from "./ResumeList";

const Skills = ({ data }) => {
  return (
    <section className="resume-section skills">
      <p className="resume-section__header">Skills</p>
      <ResumeList
        className="resume-section__list--grid"
        dataList={data}
        renderItem={(skill) => <div>{skill}</div>}
      />
    </section>
  );
};

export default Skills;
