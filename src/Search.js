import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";

function Search() {
    const [query, setQuery] = useState("");
  return (
    <div className="text-center text-cyan-700">
      <input
        type="text"
        placeholder=" Search..."
        className="rounded-2xl text-black mr-2 ml-5 pl-2"
      />
      <SearchIcon />
    </div>
  );
}

export default Search;
