import React, { useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";

export const Navigation = (props) => {
  // State to control menu collapse
  const [collapsed, setCollapsed] = useState(true);

  // Function to toggle menu collapse state
  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  // Function to handle click on li item and close the menu
  const handleMenuItemClick = () => {
    setCollapsed(true);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <div className="whatsapp-icon">
            <a href="https://wa.me/+917208549842" target="_blank" rel="noopener noreferrer">
              <IoLogoWhatsapp />
            </a>
          </div>
          <button
            type="button"
            className={"navbar-toggle collapsed" + (collapsed ? "" : " in")} // Add "in" class if not collapsed
            onClick={toggleCollapse}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Advance Classes
          </a>{" "}
        </div>

        <div
          className={"collapse navbar-collapse" + (collapsed ? "" : " in")} // Add "in" class if not collapsed
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#features"
                className="page-scroll"
                onClick={handleMenuItemClick}
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="page-scroll"
                onClick={handleMenuItemClick}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#Courses"
                className="page-scroll"
                onClick={handleMenuItemClick}
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                className="page-scroll"
                onClick={handleMenuItemClick}
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                href="#team"
                className="page-scroll"
                onClick={handleMenuItemClick}
              >
                Team
              </a>
            </li>
            <li>
              <a
                href="#form"
                className="page-scroll"
                onClick={handleMenuItemClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
