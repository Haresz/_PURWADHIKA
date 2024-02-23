import React from "react";

export default function Navbar() {
  return (
    <nav>
      <h2>
        <span style={{ color: "#FFB534" }}>Haris's</span>Portofolio
      </h2>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/project">Project</a>
        </li>
        <li>
          <a href="/experient">Experience</a>
        </li>
        <li className="contact-nav-menu">
          <a style={{ color: "white" }} href="/contact">
            Contact me!
          </a>
        </li>
      </ul>
    </nav>
  );
}
