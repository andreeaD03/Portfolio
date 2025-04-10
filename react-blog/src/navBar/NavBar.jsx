import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import SearchBar from "./SearchBar";
import { LuMessageCircleHeart } from "react-icons/lu";

const NavBar = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
