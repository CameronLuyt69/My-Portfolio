// src/Components/Navigation.js
import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => (
  <nav id="nav-wrap">
    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
      Show navigation
    </a>
    <a className="mobile-btn" href="#home" title="Hide navigation">
      Hide navigation
    </a>

    <ul id="nav" className="nav">
      <li className="current">
        <a className="smoothscroll" href="/">Home</a>
      </li>
      <li>
        <a className="smoothscroll" href="/#about">About</a>
      </li>
      <li>
        <Link className="smoothscroll" to="/portfolio">Portfolio</Link>
      </li>
      <li>
        <a className="smoothscroll" href="/resume">Resume</a>
      </li>
      <li>
        <a className="smoothscroll" href="/#testimonials">Testimonials</a>
      </li>
      <li>
        <a className="smoothscroll" href="/#contact">Contact</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
