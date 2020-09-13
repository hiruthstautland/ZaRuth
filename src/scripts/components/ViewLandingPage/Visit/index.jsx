import React from "react";
import { Link } from "react-router-dom";

export const Visit = () => (
  <button
    style={{
      margin: "1rem",
      padding: ".4rem 2rem",
      letterSpacing: 1.4,
      textTransform: "uppercase",
    }}
  >
    <Link to="/view-autocomplete">Visit</Link>
  </button>
);
