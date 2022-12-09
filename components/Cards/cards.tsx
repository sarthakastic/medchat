import React from "react";
import data from "../Data/Data.json";
import { useRouter } from "next/router";
const cards = () => {
  const router = useRouter();

  return (
    <>
      <div>
        {data.map((i) => (
          <div onClick={() => router.push(`/disease/${i.id}`)}>
            <div>{i.id}</div>
            <div>{i.name}</div>
            <div> {i.symptoms.toString()}</div>
          </div>
        ))}
      </div>
      <div></div>
    </>
  );
};

export default cards;
