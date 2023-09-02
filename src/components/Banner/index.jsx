import React from "react";

function Banner({ page }) {
  page = page || "About";
  return (
    <div className="about-section-one">
      <h2 className="h2">{page}</h2>
      <ul>
        <li>Home</li>
        <li>{page}</li>
      </ul>
    </div>
  );
}

export default Banner;
