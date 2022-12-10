import React from "react";
import data from "../Data/Data.json";
import { useRouter } from "next/router";
const cards = () => {
  const router = useRouter();

  return (
    <>
      <div className="  min-h-[calc(100vh-64px)] flex flex-wrap justify-center items-center ">
        {data.map((i) => (
          <div
            key={i.id}
            className=" hover:cursor-pointer flex flex-col justify-between w-96 p-2 h-96 rounded-2xl text-blue-400 dark:text-blue-600 bg-white dark:bg-slate-400 m-2 "
            onClick={() => router.push(`/disease/${i.id}`)}
          >
            <img className="h-56 w-full rounded-2xl " src={i.image} alt="" />

            <div className="font-bold text-blue-500 dark:text-blue-600 mt-2 ">
              {i.name}
            </div>
            <div>
              {" "}
              <span className="font-semibold">Symptoms :</span>{" "}
              {i.symptoms.toString()}
            </div>
            <div>
              {" "}
              <span className="font-semibold">Precautions :</span>{" "}
              {i.precautions}
            </div>
            <div>
              {" "}
              <span className="font-semibold">Medications :</span>{" "}
              {i.medications}
            </div>
          </div>
        ))}
      </div>
      <div></div>
    </>
  );
};

export default cards;
