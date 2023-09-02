import React, { useState } from "react";
import ServiceCardStyles from "./ServiceCard.module.css";
import icon1 from "../../../assets/icon_1.png";
function ServiceCard({ bgColor, color, link }) {
  bgColor = bgColor || "#FEC931";
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={ServiceCardStyles.container}
    >
      <div className={ServiceCardStyles.icon}>
        <img src={icon1} alt="" />
      </div>
      <h3 className={ServiceCardStyles.title}>Digital Printing</h3>
      <p className={ServiceCardStyles.body}>
        Sed ut perspiciatis unde omnis iste natus error voluptate
      </p>
      <a href={link} className={ServiceCardStyles.link}>
        Read More
      </a>
    </div>
  );
}

export default ServiceCard;
