import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "../About/About.css";

import Loading from "../../components/HOCs/Loading";
import aboutImageOne from "../../assets/astro20.jpg";

import AboutCard from "../../components/Card/AboutCard/AboutCard";
import ReviewsCard from "../../components/Card/ReviewsCard/ReviewsCard";
import Banner from "../../components/Banner";
import Aos from "aos";
import "aos/dist/aos.css";

function About() {
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
              Astro Studioz is equipped with one of the best cameras, Talking
              about a canon M50 mark II, M6, and other equipments like the
              drone, good studio lights and props
            </p>
            <h5 className="h5">
              AstroStudioz is a photography studio company that specializes in
              capturing memorable moments through stunning photographs.
              AstroStudioz was established by a group of enthusiastic and gifted
              photographers, and it has been offering consumers top-notch
              photography services for many years. Every customer at
              AstroStudioz is different, and each one has a certain idea in mind
              for their photo session. In order to create high-quality images
              that go above and beyond their expectations, our team of seasoned
              photographers works closely with customers to understand their
              needs and preferences. Whether you want to capture a corporate
              event, a family portrait, or your wedding day, AstroStudioz has
              the knowledge and talent to take stunning photos that will stand
              the test of time. Modern tools and methods are used to ensure that
              each detail is precisely captured.
            </h5>
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
