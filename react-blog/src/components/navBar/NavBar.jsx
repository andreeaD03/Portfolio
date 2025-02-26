import React from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="nav">
      <ul>
        <li>Home</li>
        <li>About</li>
      </ul>
      <SearchBar />
    </div>
  );
};

export default NavBar;
