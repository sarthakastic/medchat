import React, { useState } from "react";
import data from "../../Data/Data.json";

const Search = () => {
  const [search, setSearch] = useState<string>("");

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
                <div className="bg-red-500">
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
