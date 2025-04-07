import React from "react";
import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = () => {
  return (
    <div className="search-bar-container">
      <div className="search-bar">
        <FaSearch id="searchIcon" />
        <input id="input" type="text" placeholder="type to search" />
      </div>
    </div>
  );
};

export default SearchBar;
