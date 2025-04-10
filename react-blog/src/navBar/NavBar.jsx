import React from "react";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import { LuMessageCircleHeart } from "react-icons/lu";

const NavBar = () => {
  return (
    <div className="nav">
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Posts</li>
      </ul>
      <NavBar />
    </div>
  );
};

export default NavBar;
