import React from "react";
import Router, { useRouter } from "next/router";
import data from "../../components/Data/Data.json";
import { Navbar } from "../../components/Navbar/Navbar";

const id = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      {/* <Navbar /> */}
      <div className="min-h-[calc(100vh-64px)]">
        {data.map((i) =>
          id == i.id.toString() ? (
            <div className="p-4 text-blue-400 dark:text-blue-600  ">
              <img className="w-full h-96 " src={i.image} alt="" />
              <div className=" font-bold text-blue-500 dark:text-blue-600 mt-2  ">
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
                {i.precautions}{" "}
              </div>
              <div>
                {" "}
                <span className="font-semibold">Medications :</span>{" "}
                {i.medications}
              </div>
            </div>
          ) : null
        )}
      </div>
    </>
  );
};

export default id;
