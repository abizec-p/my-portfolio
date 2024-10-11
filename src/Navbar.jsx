import { NavLink } from "react-router-dom";
import './navbar.css'
import { useState } from "react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
function HandleHover() {
  setIsOpen(true);
  }
  function handleMouseLeave() {
    setIsOpen(false);
  }
  function handleScroll() {
    
  }
  return (
    <section className="navBar">
      <div className="logo">
        <NavLink to="/" className="navItems">
          <h1>Jake's</h1>
        </NavLink>
      </div>
      <div className="menuItems">
        <ul>
          <li>
            {" "}
            <a href="#profileID" className="navItems">
              Profile
            </a>
          </li>
          <li>
            <NavLink
              onMouseEnter={HandleHover}
              onMouseLeave={handleMouseLeave}
              className="navItems"
              to="/Calculator"
            >
              Projects
              {isOpen && (
                <ul className="open">
                  <li>Calculator</li>
                  <li>App1</li>
                  <li>App2</li>
                </ul>
              )}
            </NavLink>
          </li>
          <li>
            <a href="#skillsID" className="navItems">
              Skillsets
            </a>
          </li>
          <li className="contactButton">
            <a href="#contactID" className="navItems " >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
