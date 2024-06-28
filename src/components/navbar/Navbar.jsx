import React, { useState } from "react";
import "./Navbar.scss";
import logo from "../../../public/logo.svg"
import { NavLink } from "react-router-dom";
import { IoCart, IoSearchOutline } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";

const Navbar = () => {
  let [shrink, setShrink] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setShrink(true);
    } else {
      setShrink(false);
    }
  });

  return (
    <header className={`header ${shrink ? "shrink" : ""}`}>
      <div className="container">
        <nav className="navbar">
          <NavLink to={"/"}>
            <div className="navbar__logo">
              <img src={logo} alt="logo" />
              <h4>Mohid</h4>
            </div>
          </NavLink>
          <ul className="navbar__list">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>
                <select>
                  <option value="brands">Brands</option>
                  <option value="models">Models</option>
                  <option value="styles">Styles</option>
                </select>
              </NavLink>
            </li>
            <li>
              <NavLink to={"#"}>Recent Products</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={"#"}>About</NavLink>
            </li>
          </ul>
          <div className="navbar__menu">
            <IoSearchOutline size={20} />
            <IoCart size={21} />
            <NavLink to={'/admin'}>
              <FaUserAlt size={17} />
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
