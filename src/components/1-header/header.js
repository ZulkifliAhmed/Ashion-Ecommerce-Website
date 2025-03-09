import { GiHamburgerMenu } from "react-icons/gi";
import LogoImg from "../1-header/logo";
import Register from "./register";
import HeaderIcons from "../1-header/headerIcons";
import { RxCross2 } from "react-icons/rx";
import Navbar from "../1-header/navbar";
import "./header.css";
import { useState } from "react";

function Header() {
  const [Nav, SetNav] = useState(false);
  return (
    <div className="header">
      {Nav && (
        <div className="mobilenavbar">
          <div className="navbar_box ">
            <div className="cross">
              <span>
                <RxCross2
                  onClick={() => {
                    SetNav(false);
                  }}
                />
              </span>
            </div>
            <div className="right_header">
              <HeaderIcons />
            </div>
            <LogoImg />
            <Navbar />
            <Register />
          </div>
        </div>
      )}
      <div className="container">
        <LogoImg />
        <nav>
          <Navbar />
        </nav>
        <div className="right_header">
          <Register />
          <HeaderIcons />
        </div>
        <div className="HamburgerMenu">
          <GiHamburgerMenu
            onClick={() => {
              SetNav(true);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
