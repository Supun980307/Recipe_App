"use client";

import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const onSearch = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form className="flex justify-center w-2/3" onSubmit={onSearch}>
      <div className="relative w-full md:w-1/2">
        <input
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
          type="text"
          placeholder="Search..."
          className="relative p-2 md:p-4 mx-1 min-w-72 mr-1 rounded-md border border-gray-400 w-full"
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
          <BsSearch className="text-gray-500 text-3xl" />
        </div>
      </div>
    </form>
  );
};
export default SearchBar;
