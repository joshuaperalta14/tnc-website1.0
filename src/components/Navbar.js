import "./NavbarStyles.css";
import logo from "../assets/TNC_2020_Logo_Landscape_Group_white2.png";
import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
        <div>
        <img src={logo} alt="Logo" className="logo" />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/events">
                  &nbsp;Events&nbsp;&nbsp;&nbsp;
                </Link>
            </li>
            <li>
                <Link to="/inventory">
                  &nbsp;Inventory&nbsp;&nbsp;&nbsp;
                </Link>
            </li>
            <li>
                <Link to="/about">
                  &nbsp;About&nbsp;&nbsp;&nbsp;
                </Link>
            </li>
            <li>
                <Link to="/support">
                 &nbsp;Support&nbsp;&nbsp;&nbsp;
                </Link>
            </li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
            {click ? (
                <FaTimes className="hamburger-icon" size={20} style={{ color: "#fff" }} />
            ) : (
                <FaBars className="hamburger-icon" size={20} style={{ color: "#fff" }} />
            )}
        </div>
    </div>
  );
};

export default Navbar;