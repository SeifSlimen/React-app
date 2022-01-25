import React from "react";
import Grid from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={Grid} className="Nav--logo" />
    </nav>
  );
}
