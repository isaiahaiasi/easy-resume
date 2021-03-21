import { nanoid } from "nanoid";
import React from "react";

const ResumeList = ({ className, dataList, renderItem }) => {
  const onDelete = (item) => {
    console.log(`deleting ${item}`);
  };

  return (
    <ul className={`resume-section__list ${className}`}>
      {dataList.map((child) => (
        <li className="resume-list-item" key={child.id ?? nanoid(10)}>
          {renderItem(child)}
          <button onClick={() => onDelete(child)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ResumeList;
