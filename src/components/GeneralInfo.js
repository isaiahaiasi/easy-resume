import { nanoid } from "nanoid";

const GeneralInfo = ({ data }) => {
  return (
    <section className="resume-section">
      <div className="resume-section__header text-center">
        <span>{data.firstName}</span>{" "}
        <span className="text-bold"> {data.lastName}</span>
      </div>
      {data.contactInfoList && data.contactInfoList.length > 0 ? (
        <ul className="resume-section__list resume-section__list--row flex-center">
          {data.contactInfoList.map((child) => (
            <li key={child.id ?? nanoid(10)}>
              {child.type}: {child.info}
            </li>
          ))}
        </ul>
      ) : (
        <p className="placeholder">Add contact info</p>
      )}
    </section>
  );
};

export default GeneralInfo;
