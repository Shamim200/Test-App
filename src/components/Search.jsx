import React, { useState, useEffect } from "react";
import { useGlobal } from "./context";

const Search = () => {
  const [query, setQuery] = useState("");

  const { getApi, api } = useGlobal();

  useEffect(() => {
    getApi(`${api}?q=${query}`);
  }, [query]);

  const SearchQuery = (e) => {
    e.prevendDefault();
  };
  return (
    <form onSubmit={SearchQuery}>
      <div className="input-group justify-content-center my-3">
        <input
          type="text"
          placeholder="search"
          className="w-50  p-2"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </form>
  );
};

export default Search;
