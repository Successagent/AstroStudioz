import React from "react";
import Banner from "../../components/Banner";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

import Loading from "../../components/HOCs/Loading";

import "../Faq/Faq.css";

import { FaPlus, FaMinus } from "react-icons/fa";

const Faq = ({ toggleActive, active }) => {
  return (
    <>
      <Header />
      <div className="faq-section">
        <Banner page="Faq" />
        <div className="faq-section-one">
          <div>
            <div>
              <div className="about-printing-intro printing-intro">
                <h3 id="tab-1" className="h3" onClick={toggleActive}>
                  What is the process for booking a photography session with
                  AstroStudioz?
                </h3>
                <div>
                  {active === 0 ? (
                    <FaMinus></FaMinus>
                  ) : active === 1 ? (
                    <FaMinus></FaMinus>
                  ) : (
                    <FaPlus></FaPlus>
                  )}
                </div>
              </div>
              <h5
                className={`h5 ${
                  active === 0
                    ? "increase-height"
                    : active === 1
                    ? "increase-height"
                    : "h5"
                }`}
              >
                What is the process for booking a photography session with
                AstroStudioz? To book a photography session with AstroStudioz,
                simply fill out our online contact form or give us a call. We
                will schedule a consultation to discuss your needs and
                preferences, and to determine the best package for your budget.
              </h5>
            </div>
            <div>
              <div className="about-printing-intro printing-intro">
                <h3 id="tab-2" className="h3" onClick={toggleActive}>
                  What type of photography services does AstroStudioz offer?
                </h3>
                <div>
                  {active === 2 ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
                </div>
              </div>
              <h5 className={`h5 ${active === 2 ? "increase-height" : "h5"}`}>
                AstroStudioz offers a wide range of photography services,
                including wedding photography, family photography, portrait
                photography, event photography, and corporate photography.
              </h5>
            </div>
          </div>
          <div>
            <div>
              <div className="about-printing-intro printing-intro">
                <h3 id="tab-5" className="h3" onClick={toggleActive}>
                  Can we choose the location for our photography session?
                </h3>
                <div>
                  {active === 5 ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
                </div>
              </div>
              <h5 className={`h5 ${active === 5 ? "increase-height" : "h5"}`}>
                Yes, you can choose the location for your photography session.
                We will work with you to determine the best location that fits
                your needs and preferences.
              </h5>
            </div>
            <div>
              <div className="about-printing-intro printing-intro">
                <h3 id="tab-3" className="h3" onClick={toggleActive}>
                  Can we customize our photography package?
                </h3>
                <div>
                  {active === 3 ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
                </div>
              </div>
              <h5 className={`h5 ${active === 3 ? "increase-height" : "h5"}`}>
                Yes, we offer customized photography packages to suit your
                specific needs and preferences. We will work with you to
                determine the best package for your budget and ensure that you
                get the most out of your photography session.
              </h5>
            </div>
            <div>
              <div className="about-printing-intro printing-intro">
                <h3 id="tab-4" className="h3" onClick={toggleActive}>
                  How long will it take to receive our photos after the session?
                </h3>
                <div>
                  {active === 4 ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
                </div>
              </div>
              <h5 className={`h5 ${active === 4 ? "increase-height" : "h5"}`}>
                We typically deliver photos within two to three weeks after the
                session. However, delivery times may vary depending on the
                complexity of the project and our current workload.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Loading(Faq);
