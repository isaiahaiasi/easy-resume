import React, { useState } from "react";
import defaultData from "./demo-data-custom.json";
import Resume from "./Resume";

export const actions = {
  add: "ADD",
  get: "GET",
  set: "SET",
  remove: "REMOVE",
};

// TODO: add localStorage
export default function Store() {
  const [storeData, setStoreData] = useState(defaultData);

  const add = (id, data) => {
    if (storeData[id]) {
      throw new Error(
        `Tried to create a new record at ${id}, but one already exists`
      );
    }

    setStoreData((prevData) => ({ ...prevData, [id]: data }));
  };

  const get = (id) => {
    if (!storeData[id]) {
      console.warn(`Tried to get data with key ${id}, which does not exist`);
      return null;
    }

    return storeData[id];
  };

  const set = (id, data) => {
    if (!storeData[id]) {
      throw new Error(
        `Tried to update record at ${id}, but record does not exist`
      );
    }

    setStoreData((prevData) => ({ ...prevData, [id]: data }));
  };

  const remove = (id) => {
    if (!storeData[id]) {
      console.warn(`Tried to delete non-existent key ${id}`);
      return null;
    }

    setStoreData((prevData) => ({ ...prevData, [id]: undefined }));
  };

  const request = (action, id, data) => {
    switch (action) {
      case actions.add:
        return add(id, data);
      case actions.get:
        return get(id);
      case actions.set:
        return set(id, data);
      case actions.remove:
        return remove(id);
      default:
        throw new Error(`Unhandled action type ${action}`);
    }
  };

  return <Resume data={storeData} dataHandler={request} />;
}
