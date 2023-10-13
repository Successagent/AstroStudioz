import React from "react";

import ReviewLogoOne from "../../../assets/astro3.jpg";
import ReviewLogoTwo from "../../../assets/astro16.webp";
import ReviewLogoThree from "../../../assets/astro1.webp";
const ReviewsCard = () => {
  return (
    <div className="review-card">
      <div>
        <div className="reviewcard-caption">
          <p className="h5">The Pictures are beautiful and very creative</p>
        </div>
        <div className="reviewcard-item-two">
          <img src={ReviewLogoOne} alt="" />
          <div>
            <h3>Blessing</h3>
            <p className="h5">Enterprenuer</p>
          </div>
        </div>
      </div>
      <div>
        <div className="reviewcard-caption">
          <p className="h5">
            There is more creativity in AstroStudioz than they know{" "}
          </p>
        </div>
        <div className="reviewcard-item-two">
          <img src={ReviewLogoTwo} alt="" />
          <div>
            <h3>Promzy</h3>
            <p className="h5">Musician</p>
          </div>
        </div>
      </div>
      <div>
        <div className="reviewcard-caption">
          <p className="h5">
            Y'all did the most, I couldn't almost recognise myself
          </p>
        </div>
        <div className="reviewcard-item-two">
          <img src={ReviewLogoThree} alt="" />
          <div>
            <h3>Chidera</h3>
            <p className="h5">Model</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
