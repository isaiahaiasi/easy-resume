import { nanoid } from "nanoid";

const Skills = ({ data }) => {
  return (
    <section className="resume-section skills">
      <p className="resume-section__header">Skills</p>
      <ul className="resume-section__list resume-section__list--grid">
        {data.map((skill) => (
          <li className="resume-list-item" key={nanoid(10)}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
