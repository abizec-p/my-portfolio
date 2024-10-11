import React from "react";
import Slider from "react-slick";
import "./home.css";
import SimpleSlider from "./slider";
import Navbar from "../Navbar";
import { FaAngleDoubleDown } from "react-icons/fa";
import { Socials } from "./profile";


export default function Hero() {
  return (
    <section className="homepage">
      <Navbar />
      <div className="heroMain">
        <div className="textPart">
          <div>
            <p>
              <span className="biggerText">Abishek pariyar</span>
              <br /> FrontEnd web developer,designer and Graphics desiger.
            </p>
            <Socials />
          </div>
        </div>
      </div>
      <div className="seeWorks">
        <h1>See works</h1>
        <div className="downArrow">
          <FaAngleDoubleDown />
        </div>
      </div>
      
    </section>
  );
}
