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
      <div className="smallDescription">
        <h1>W Blog</h1>

        <p>
          {" "}
          <LuMessageCircleHeart id="heartIcon" />
          Here with you for every question
        </p>
      </div>
      <SearchBar />
    </div>
  );
};

export default NavBar;
