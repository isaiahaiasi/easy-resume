import { nanoid } from "nanoid";
import React from "react";

const ResumeList = ({ className, dataList, renderItem, Placeholder }) => {
  const onDelete = (item) => {
    console.log(`deleting ${item}`);
  };

  return (
    <ul className={`resume-section__list ${className}`}>
      {dataList
        ? dataList.map((child) => (
            <li className="resume-list-item" key={child.id ?? nanoid(10)}>
              {renderItem(child)}
              <button onClick={() => onDelete(child)}>delete</button>
            </li>
          ))
        : Placeholder}
    </ul>
  );
};

export default ResumeList;
