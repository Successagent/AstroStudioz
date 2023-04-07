import React, { useEffect, useRef } from "react";
import Header from "../../components/Header";
import "../About/About.css";

import Loading from "../../components/HOCs/Loading";
import { FaMinus, FaPlus } from "react-icons/fa";

import aboutImageOne from "../../assets/Images/img_01.png";
import aboutImageTwo from "../../assets/astrosoft.svg";
import aboutImageThree from "../../assets/Images/iso.png";
import aboutImageFour from "../../assets/Images/img_01-9.jpg";
import aboutImageFive from "../../assets/Images/img_01-2-768x680.jpg";
import AboutCard from "../../components/Card/AboutCard/AboutCard";
import MemberCard from "../../components/Card/MemberCard";
import ReviewsCard from "../../components/Card/ReviewsCard/ReviewsCard";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import Aos from "aos";
import "aos/dist/aos.css";

function About({ toggleActive, active }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Header />
      <div className="about-section">
        <Banner />
        <div className="sect sect--row">
          <div>
            <img src={aboutImageOne} alt="" />
          </div>
          <div data-aos="fade-up">
            <div className="boxes">
              <h4 className="h4">About Our Company</h4>
              <h1 className="h2">AstroStudioz</h1>
            </div>
            <p className="p">
              About Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accu santium doloremque laudantium, totam rem aperiam,
              eaque ipquae ab illo inventore veritatis et quasi architecto
              beatae
            </p>
            <h5 className="h5">
              But I must explain to you how all this mistaken idea of denouncing
              pleasure and praising pain was born and I will give you a complete
              account of the system and expound the actual teachings of the
              great explorer of the truth, the master-build human happiness. No
              one rejects, dislikes, or avoids pleasure
            </h5>
            <div className="about-part-two-footer">
              <div>
                <img src={aboutImageTwo} alt="" />
                <div>
                  <h3 className="h3">ISO Certified</h3>
                  <h5 className="h5">
                    ISO Certified Denouncing pleasure and praising pain was born
                  </h5>
                </div>
              </div>
              <div>
                <img src={aboutImageTwo} alt="" />
                <div>
                  <h3 className="h3">Award Wins</h3>
                  <h5 className="h5">
                    Denouncing pleasure and praising pain was bor
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="about-section-three">
          <h4 className="h4">What We Offers</h4>
          <div>
            <h2 className="h2">We Provide Lot’s Of Good Studio Pictures</h2>
          </div>
          <AboutCard />
        </div>
        <div className="about-section-six">
          <h4 className="h4">Clients Reviews</h4>
          <div>
            <h2 className="h2">What Our Clients Say About Our Works</h2>
          </div>
          <ReviewsCard />
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Loading(About);
