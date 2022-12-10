import React from "react";
import Router, { useRouter } from "next/router";
import data from "../../components/Data/Data.json";
import { Navbar } from "../../components/Navbar/Navbar";

const id = () => {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <Navbar />
      <div className="h-screen">
        {data.map((i) => (id == i.id.toString() ? i.name : null))}
      </div>
      ;
    </>
  );
};

export default id;
