"use client";

import React from "react";
import { BiSearch } from "react-icons/bi";

function Search() {
  return (
    <div
      className="
    border-gray-300
    w-full 
    md:w-auto 
    py-2 
    rounded-full 
    shadow-sm 
    bg-white
    hover:bg-surface
    transition 
    cursor-pointer
    "
    >
      <div
        className="flex
      flex-row
      items-center
      justify-between
      "
      >
        <div
          className="
        text-sm 
        font-semibold 
        pl-6
        pr-2
        flex
        flex-row
        items-center
        gap-3
        "
        >
          Search
          <div className="p-2 bg-primary hover:bg-secondary rounded-full text-white">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Search;
