import React, { useState } from "react";
import { actions } from "../Store";
import GeneralInfoForm from "./GeneralInfoForm";

const GeneralInfo = ({ data, dataHandler }) => {
  const [isEditing, setEditing] = useState(false);

  const onSubmit = (data) => {
    dataHandler(actions.set, "generalInfo", data);
    setEditing(false);
  };

  const renderStatic = () => (
    <>
      <div
        className="resume-section__header text-center"
        style={{ fontSize: "2.8rem" }}
      >
        <span>{data.firstName}</span>{" "}
        <span className="text-bold"> {data.lastName}</span>
      </div>
      <ul className="resume-section__list resume-section__list--row flex-center no-indent">
        {data.contactInfo.phone && (
          <li className="resume-list-item" key="phone">
            phone: {data.contactInfo.phone}
          </li>
        )}
        {data.contactInfo.email && (
          <li className="resume-list-item" key="email">
            email: {data.contactInfo.email}
          </li>
        )}
        {data.contactInfo.location && (
          <li className="resume-list-item" key="location">
            location: {data.contactInfo.location}
          </li>
        )}
      </ul>
      <button type="button" onClick={() => setEditing(true)}>
        Edit
      </button>
    </>
  );

  const renderEditing = () => {
    // no frickin clue how to handle this...
    // -> contact info prob shouldn't be a list, since its a fixed set of unique values,
    // { type: value, typeB: valueB } probably makes more sense
    return (
      <GeneralInfoForm
        data={data}
        contactInfo={data.contactInfo}
        onSubmit={onSubmit}
      />
    );
  };

  return (
    <section className="resume-section">
      {isEditing ? renderEditing() : renderStatic()}
    </section>
  );
};

export default GeneralInfo;
