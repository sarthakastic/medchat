import { useRouter } from "next/router";
import React, { useState } from "react";
import data from "../../Data/Data.json";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const [searchResultCount, setSearchResultCount] = useState<number>(0);
  const router = useRouter();

  return (
    <>
      <input
        className="border h-10 text-xs md:w-[550px]  px-2  "
        type="text"
        value={search}
        placeholder="Search for Disease or Symptoms..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="mt-4  z-10 rounded-2xl max-h-56 overflow-y-scroll text-white bg-primary absolute md:w-[550px]  ">
        {search === ""
          ? null
          : data.map((i) =>
              i.symptoms.toString().includes(search.toLocaleLowerCase()) ||
              i.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) ? (
                <div
                  key={i.id}
                  className=" px-4 h-full flex items-center hover:cursor-pointer "
                  onClick={() => (
                    router.push(`/disease/${i.id}`), setSearch("")
                  )}
                >
                  {}
                  <img className="h-8 my-2 w-14" src={i.image} alt="" />
                  <div className="ml-4">{i.name}</div>
                </div>
              ) : null
            )}
      </div>
    </>
  );
};

export default Search;
