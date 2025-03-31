import React from "react";
import "./NavBar.css";

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
