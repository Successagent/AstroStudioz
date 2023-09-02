import React, { useState } from "react";
import FeatureCardStyles from "./FeatureCard.module.css";
import { Link } from "react-router-dom";
import { AiOutlinePrinter } from "react-icons/ai";

function FeatureCard({ title, body, target, bgColor }) {
  title = title || "Printing & Press";
  body =
    body ||
    "Sed ut perspiciat unde omnis iste natus error sit voluptatem accusantium system";
  target = target || "about";
  target = "/" + target;
  bgColor = bgColor || "#6100da";

  return (
    <div className={FeatureCardStyles.container}>
      <div
        className={FeatureCardStyles.icon}
        style={{ backgroundColor: bgColor }}
      >
        <AiOutlinePrinter size={30} color="#fff" />
      </div>
      <div className={FeatureCardStyles.text}>
        <h3 className={FeatureCardStyles.title}>{title} </h3>
        <p className={FeatureCardStyles.body}>{body}</p>
        {/* TODO: Make a link */}
        <Link to={target}>Read More</Link>
      </div>
    </div>
  );
}

export default FeatureCard;
