import { nanoid } from "nanoid";
import School from "./School";

const Education = ({ data }) => {
  return (
    <section className="resume-section education">
      <p className="resume-section__header">Education</p>
      <ul className="resume-section__list no-indent">
        {data.schools.map((child) => (
          <School data={child} key={child.id ?? nanoid(10)} />
        ))}
      </ul>
    </section>
  );
};

export default Education;
