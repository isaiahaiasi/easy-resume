import { nanoid } from "nanoid";
// A helper function to solve my weird pseudo-flat-data problem...
const flatten = (oldData) => {
  // get an array of key-value pairs to iterate over
  const dataEntries = Object.entries(oldData);

  // iterate over every top-level object,
  // and inside each, if a key points to a sub-object,
  // replace that object with an id,
  // and move the sub-object to the top level,
  // with the same id as its key
  for (let i = 0; i < dataEntries.length; i++) {
    const objectEntries = Object.entries(dataEntries[i][1]);
    for (let j = 0; j < objectEntries.length; j++) {
      if (typeof objectEntries[j][1] === "object") {
        const id = nanoid(10);
        dataEntries.push([id, objectEntries[j][1]]);
        objectEntries[j][1] = id;
      }
    }
    // if keys are indices, make an array--else make an object
    dataEntries[i][1] =
      objectEntries[0][0] === "0"
        ? (dataEntries[i][1] = objectEntries.map((entry) => entry[1]))
        : (dataEntries[i][1] = Object.fromEntries(objectEntries));
  }

  const flatData = Object.fromEntries(dataEntries);
  return flatData;
};

export default flatten;
