import React, { useEffect } from "react";
import Loading from "../../components/HOCs/Loading";

import AboutCard from "../../components/Card/AboutCard/AboutCard";
import ReviewsCard from "../../components/Card/ReviewsCard/ReviewsCard";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header";
import Counter from "../../components/Counter";
import serviceLogoOne from "../../assets/astro4.jpg";

import { FaCube, FaLaptopCode, FaTrophy } from "react-icons/fa";
import {
  FiArrowRight,
  FiCheck,
  FiPrinter,
  FiSettings,
  FiHeart,
  FiTruck,
} from "react-icons/fi";

import "../Services/Service.css";
import "../About/About.css";
import Banner from "../../components/Banner";
import Aos from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <Header />
      <div className="service-section">
        <Banner page="Services" />
        <div className="service-sec-one">
          <div className="service-sec-one-item-one">
            <div className="">
              <h4 className="h4">Our Core Features</h4>
              <h2 data-aos="fade-up" className="h2">
                Explore Every Features
              </h2>
            </div>
            <h5 className="h5 ">
              Do Do Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudan
            </h5>
            <button className="service-btn ">
              DISCOVER MORE
              <div className="section-icon">
                <FiArrowRight></FiArrowRight>
              </div>
            </button>
          </div>
          <div className="service-sec-one-item-two">
            <div>
              <div
                className="service-sec-two-icons-con"
                style={{ backgroundColor: "#FEC931" }}
              >
                <FiPrinter></FiPrinter>
              </div>
              <div>
                <h3 className="h3">AstroStudioz</h3>
                <h5 className="h5">
                  Sed ut perspiciat unde omnis natus error voluptatem
                </h5>
                <button>
                  Read more <FiArrowRight></FiArrowRight>
                </button>
              </div>
            </div>
            <div>
              <div
                className="service-sec-two-icons-con"
                style={{ backgroundColor: "#1A1E5D" }}
              >
                <FaCube></FaCube>
              </div>
              <div>
                <h3 className="h3">3D Printing</h3>
                <h5 className="h5">
                  Sed ut perspiciat unde omnis natus error voluptatem
                </h5>
                <button>
                  Read more <FiArrowRight></FiArrowRight>
                </button>
              </div>
            </div>
            <div>
              <div className="service-sec-two-icons-con">
                <FaLaptopCode></FaLaptopCode>
              </div>
              <div>
                <h3 className="h3">Digital Printing</h3>
                <h5 className="h5">
                  Sed ut perspiciat unde omnis natus error voluptatem
                </h5>
                <button>
                  Read more <FiArrowRight></FiArrowRight>
                </button>
              </div>
            </div>
            <div>
              <div
                className="service-sec-two-icons-con"
                style={{ backgroundColor: "#767676" }}
              >
                <FiSettings></FiSettings>
              </div>
              <div>
                <h3 className="h3">Offset Printing</h3>
                <h5 className="h5">
                  Sed ut perspiciat unde omnis natus error voluptatem
                </h5>
                <button>
                  Read more <FiArrowRight></FiArrowRight>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="service-section-two about-section-three">
          <h4 className="h4">What We Offers</h4>
          <div>
            <h2 className="h2">We Provide Lot’s Of Good Studio Pictures</h2>
          </div>
          <AboutCard />
        </div>
        <div className="service-section-three">
          <div>
            <img src={serviceLogoOne} alt="" />
          </div>
          <div data-aos="fade-up" className="service-section-three-part-two ">
            <h4 className="h4">Needs Any Helps</h4>
            <h2 className="h2">
              AStroStudioz is Always Ready To Give You The Perfect Shots
            </h2>
            <h5 className="h5">
              Quote Sed ut perspiciatis unde omnis iste natus error sit
              voluptatem accusantium doloremque laudantium, totam rem aperiam,
              eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo
            </h5>
            <div>
              <FiCheck className="service-sec-checkmark"></FiCheck>
              <p className="h5">
                Smashing Podcast Episode 19 With Andy Bell What Is CUBE ?
              </p>
            </div>
            <div>
              <FiCheck className="service-sec-checkmark"></FiCheck>
              <p className="h5">
                Smashing Podcast Episode 19 With Andy Bell What Is CUBE ?
              </p>
            </div>
            <div>
              <FiCheck className="service-sec-checkmark"></FiCheck>
              <p className="h5">
                Smashing Podcast Episode 19 With Andy Bell What Is CUBE ?
              </p>
            </div>
            <button className="service-btn">
              Meet with us
              <div className="section-icon">
                <FiArrowRight></FiArrowRight>
              </div>
            </button>
          </div>
        </div>
        <div className="service-section-four">
          <div>
            <div>
              <div style={{ backgroundColor: "#FA0213" }}>
                <FiHeart></FiHeart>
              </div>
            </div>
            <h3 className="h3">
              <Counter count={1000} />
            </h3>
            <h5 className="h5">Loving Customer</h5>
          </div>
          <div>
            <div>
              <div style={{ backgroundColor: "#209FFA" }}>
                <FaTrophy></FaTrophy>
              </div>
            </div>
            <h3 className="h3">
              <Counter count={28910} />
            </h3>
            <h5 className="h5">Awards Wins</h5>
          </div>
          <div>
            <div>
              <div style={{ backgroundColor: "#FEC931" }}>
                <FiTruck></FiTruck>
              </div>
            </div>

            <h3 className="h3">
              <Counter count={24989} />
            </h3>
            <h5 className="h5">Transportation</h5>
          </div>
          <div>
            <div>
              <div style={{ backgroundColor: "#5F43C5" }}>
                <FaLaptopCode></FaLaptopCode>
              </div>
            </div>
            <h3 className="h3">
              <Counter count={323299} />
            </h3>
            <h5 className="h5">Digital Computer</h5>
          </div>
        </div>
        <div className="about-section-six">
          <h4 className="h4">Clients Reviews</h4>
          <div>
            <h2 className="h2">What Our Clients Say About Our Works</h2>
          </div>
          <ReviewsCard />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Loading(Services);
