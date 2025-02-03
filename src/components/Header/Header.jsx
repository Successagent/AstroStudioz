import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaTimes,
  FaPlus,
  FaMinus,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { BsGridFill, BsTelephone } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { VscClose } from "react-icons/vsc";
import {
  MdLocationPin,
  MdEmail,
  MdOutlineEmail,
  MdOutlineLocationOn,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./header.css";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showSubList, setShowSubList] = useState(false);
  const [showBriefInfo, setShowBriefInfo] = useState(false);
  const [scrollHeight, setScrollHeight] = useState(0);

  useEffect(() => {
    const scroll = window.addEventListener(`scroll`, () =>
      setScrollHeight(window.scrollY)
    );

    return () => window.removeEventListener(`scroll`, scroll);
  });

  return (
    <nav className={`navbar ${scrollHeight > 50 ? `fixed` : ``}`}>
      {/* <div className="top">
        <div className="address">
          <MdLocationPin />
          <a
            href="https://goo.gl/maps/7PRsQXi31SJm1jwy7"
            target="_blank"
            rel="noreferrer"
          >
            Kares Plaza, Greevilla Express Rd, Yenagoa
          </a>
        </div>
        <div className="email-socials">
          <p>
            <MdEmail />{" "}
            <a href="mailto:support@astrosoft.io">support@astrosoft.io</a>
          </p>
          <div className="socials">
            <a
              href="https://facebook.com/astrosoftng"
              rel="noreferrer"
              target="_blank"
              className="icon"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/astrosoft.io/"
              rel="noreferrer"
              target="_blank"
              className="icon"
            >
              <RiInstagramFill />
            </a>
            <a
              href="https://twitter.com/Astrosoftio"
              rel="noreferrer"
              target="_blank"
              className="icon"
            >
              <FaTwitter />
            </a>
            <a href="w" rel="noreferrer" target="_blank" className="icon">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div> */}

      <div className="bottom">
        {/* company logo */}
        <div className="logo">
          <h2>
            <Link to={"/"}>AstroStudioz Movies</Link>
          </h2>
        </div>

        {/* hamburger */}
        <div className="hamburger-close">
          {showNavbar ? (
            <VscClose onClick={() => setShowNavbar(false)} />
          ) : (
            <AiOutlineMenu onClick={() => setShowNavbar(true)} />
          )}
        </div>

        {/* links */}
        <div
          className={`links ${showNavbar ? `show` : ``} ${
            showSubList ? `extra-height` : ``
          }`}
        >
          <div className="brief-info">
            <BsGridFill
              className="icon"
              onClick={() => setShowBriefInfo(true)}
            />
            <div className={`info-container ${showBriefInfo ? `show` : ``}`}>
              <div className="info">
                <div className="close-btn">
                  <div className="icon" onClick={() => setShowBriefInfo(false)}>
                    <FaTimes />
                  </div>
                </div>
                <div className="logo">
                  <h2>Astrosoft Group</h2>
                </div>
                <p>
                  Astrosoft Group is a leading provider of innovative solutions
                  for businesses of all sizes and industry. Our experienced team
                  has a keen understanding of the industry and the challenges
                  that our clients face. We are passionate about what we do, and
                  we strive to offer our clients the best possible experience
                  with every project we undertake.
                </p>
                <div className="get-in-touch">
                  <h2>Get In Touch</h2>
                  <div className="method">
                    <BsTelephone className="icon" />
                    <div className="text">
                      <h3>Call Us Now</h3>
                      <a href="tel:+2347041620712">(+234) 704 162 0712</a>
                    </div>
                  </div>

                  <div className="method">
                    <MdOutlineEmail className="icon" />
                    <div className="text">
                      <h3>Send An Email</h3>
                      <a href="mailto:support@astrosoft.io">
                        support@astrosoft.io
                      </a>
                    </div>
                  </div>

                  <div className="method">
                    <MdOutlineLocationOn className="icon" />
                    <div className="text">
                      <h3>Office Address</h3>
                      <a
                        href="https://goo.gl/maps/7PRsQXi31SJm1jwy7"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Kares Plaza, Greevilla Express Rd, Yenagoa
                      </a>
                    </div>
                  </div>
                </div>
                <div className="socials">
                  <a
                    href="https://facebook.com/astrosoftng"
                    rel="noreferrer"
                    target="_blank"
                    className="item"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/astrosoft.io/"
                    rel="noreferrer"
                    target="_blank"
                    className="item"
                  >
                    <RiInstagramFill />
                  </a>
                  <a
                    href="https://twitter.com/Astrosoftio"
                    rel="noreferrer"
                    target="_blank"
                    className="item"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/astrosoftng"
                    rel="noreferrer"
                    target="_blank"
                    className="item"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
