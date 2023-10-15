import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "../src/assets/logo.png";
import nav_avatar from "../src/assets/nav_avatar.png";
import { useNavigate } from 'react-router-dom';

function Nav() {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);
    return () => window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <div className="nav_content">
        <img
          onClick={() => navigate("/")}
          className="nav_logo"
          src={logo}
          alt="/"
        />

        <img
          onClick={() => navigate("/profile")}
          className="nav_avatar"
          src={nav_avatar}
          alt="/"
        />
      </div>
    </div>
  );
}

export default Nav;
