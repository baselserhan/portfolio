import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavbarStyles.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <NavLink to={"/"}>
        <h1>Portfolio</h1>
      </NavLink>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <NavLink
            to={"/"}
            className={(props) => (props.isActive ? "active" : "")}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/project"}
            className={(props) => (props.isActive ? "active" : "")}
          >
            Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/about"}
            className={(props) => (props.isActive ? "active" : "")}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/contact"}
            className={(props) => (props.isActive ? "active" : "")}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "#fff" }} />
        ) : (
          <FaBars size={20} style={{ color: "#fff" }} />
        )}
      </div>
    </div>
  );
};

export default Navbar;
