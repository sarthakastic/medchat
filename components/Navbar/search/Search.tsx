import { useRouter } from "next/router";
import React, { useState } from "react";
import data from "../../Data/Data.json";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const router = useRouter();

  return (
    <>
      <>
        <input
          className="border"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {search === ""
          ? null
          : data.map((i) =>
              i.symptoms.toString().includes(search.toLocaleLowerCase()) ||
              i.name
                .toLocaleLowerCase()
                .includes(search.toLocaleLowerCase()) ? (
                <div
                  className="bg-red-500 dark:bg-purple-500 "
                  onClick={() => router.push(`/disease/${i.id}`)}
                >
                  {" "}
                  <div>{i.name}</div>
                  <div> {i.id}</div>
                </div>
              ) : null
            )}
      </>
    </>
  );
};

export default Search;
