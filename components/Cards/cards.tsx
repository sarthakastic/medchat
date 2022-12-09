import React from "react";
import data from "../Data/Data.json";
const cards = () => {
  return (
    <>
      <div>
        {data.map((i) => (
          <>
            <div>{i.id}</div>
            <div> {i.symptoms.toString()}</div>
          </>
        ))}
      </div>
      <div></div>
    </>
  );
};

export default cards;
