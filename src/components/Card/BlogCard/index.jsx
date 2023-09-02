import React, { useState } from "react";
import BlogCardStyles from "./BlogCard.module.css";
import { SmallButton } from "../../Button/";

function BlogCard() {
  return (
    <a href="/wu" className={BlogCardStyles.wrapper}>
      <div className={BlogCardStyles.container}>
        <div className={BlogCardStyles.image}></div>
        <div className={BlogCardStyles.details}>
          <div className={BlogCardStyles.avatar}></div>
          <div className={BlogCardStyles.poster}></div>
          <SmallButton width={"70px"} height={"70px"}>
            Z
          </SmallButton>
        </div>
        <div className={BlogCardStyles.text}>
          <h3 className={BlogCardStyles.title}>
            How To Run The Right Kind Of Research Study With The Double Diamond
            Model{" "}
          </h3>
          <p className={BlogCardStyles.meta}>Banner Design Nov 28, 2020</p>
        </div>
      </div>
    </a>
  );
}

export default BlogCard;
