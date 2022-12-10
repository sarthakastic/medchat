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
        className="border h-10 w-[550px]  px-2  "
        type="text"
        value={search}
        placeholder="Search for Disease or Symptoms..."
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="mt-4 absolute w-[550px]  ">
        {search === ""
          ? null
          : data.map((i) =>
              i.symptoms.toString().includes(search.toLocaleLowerCase()) ||
              i.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) ? (
                <div
                  className="bg-red-500  h-full  dark:bg-purple-500 "
                  onClick={() => (
                    router.push(`/disease/${i.id}`), setSearch("")
                  )}
                >
                  {}
                  <div>{i.name}</div>
                  <div> {i.id}</div>
                </div>
              ) : null
            )}
      </div>
    </>
  );
};

export default Search;
