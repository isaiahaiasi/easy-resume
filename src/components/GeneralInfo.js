import { nanoid } from "nanoid";
import { actions } from "../Store";

const GeneralInfo = ({ data, dataHandler }) => {
  const contactInfoList = dataHandler(actions.get, data.contactInfoList);
  return (
    <section className="resume-section">
      <div className="resume-section__header text-center">
        <span>{data.firstName}</span>{" "}
        <span className="text-bold"> {data.lastName}</span>
      </div>
      {contactInfoList && contactInfoList.length > 0 ? (
        <ul className="resume-section__list--row flex-center no-indent">
          {contactInfoList.map((childId) => {
            const childData = dataHandler(actions.get, childId);
            return (
              <li className="resume-list-item" key={nanoid(10)}>
                {childData.type}: {childData.info}
              </li>
            );
          })}
        </ul>
      ) : (
        <p className="text-placeholder">Add contact info</p>
      )}
    </section>
  );
};

export default GeneralInfo;
