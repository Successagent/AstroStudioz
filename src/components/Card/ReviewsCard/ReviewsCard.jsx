import React from "react";

import ReviewLogoOne from "../../../assets/astro3.jpg";
import ReviewLogoTwo from "../../../assets/astro6.jpg";
import ReviewLogoThree from "../../../assets/astro9.jpg";
const ReviewsCard = () => {
  return (
    <div className="review-card">
      <div>
        <div className="reviewcard-caption">
          <p className="h5">
            Title Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremqe laudantium totam rem aperiam eaque ipsa quae
            abillo inventore
          </p>
        </div>
        <div className="reviewcard-item-two">
          <img src={ReviewLogoOne} alt="" />
          <div>
            <h3>Cassey</h3>
            <p className="h5">Marketer</p>
          </div>
        </div>
      </div>
      <div>
        <div className="reviewcard-caption">
          <p className="h5">
            Title Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremqe laudantium totam rem aperiam eaque ipsa quae
            abillo inventore
          </p>
        </div>
        <div className="reviewcard-item-two">
          <img src={ReviewLogoTwo} alt="" />
          <div>
            <h3>Cassey Vegas</h3>
            <p className="h5">Enterprenuer</p>
          </div>
        </div>
      </div>
      <div>
        <div className="reviewcard-caption">
          <p className="h5">
            Title Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremqe laudantium totam rem aperiam eaque ipsa quae
            abillo inventore
          </p>
        </div>
        <div className="reviewcard-item-two">
          <img src={ReviewLogoThree} alt="" />
          <div>
            <h3>Mrs Kelvin</h3>
            <p className="h5">Web Develop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
