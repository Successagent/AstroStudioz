import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaCalendar,
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

import { FiArrowRight } from "react-icons/fi";
import "../../pages/About/About.css";
import { Button, SmallButton } from "../Button";

import footerLogoOne from "../../assets/astrosoft.svg";
import footerLogoTwo from "../../assets/noseason.png";
import footerLogoThree from "../../assets/orbitalLogo.png";
import footerLogoFour from "../../assets/Images/img_08.png";
import footerLogoFive from "../../assets/Images/img_05.png";
import footerLogoSix from "../../assets/Images/img_03-150.jpg";
import footerLogoSeven from "../../assets/Images/img_02-150.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item-one">
        <div className="footer-item-one-items">
          <img src={footerLogoOne} alt="" />
        </div>
        <div className="footer-item-one-items">
          <img src={footerLogoTwo} alt="" />
          <img className="hide" src={footerLogoThree} alt="" />
          <img className="hide" src={footerLogoFour} alt="" />
          <img className="hide hide-content" src={footerLogoFive} alt="" />
        </div>
      </div>
      <div className="footer-item-two">
        <ul>
          <h3 className="h3">Quick Links.</h3>
          <li className="h5">
            <Link to="/services">Services</Link>
          </li>
          <li className="h5">
            <Link to="/about">About</Link>
          </li>
          <li className="h5">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="h5">
            <Link to="/faq">Faq</Link>
          </li>
        </ul>
        <ul>
          <h3 className="h3">Quick Links.</h3>
          <li className="h5">
            <Link to="/services">Services</Link>
          </li>
          <li className="h5">
            <Link to="/about">About</Link>
          </li>
          <li className="h5">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="h5">
            <Link to="/faq">Faq</Link>
          </li>
        </ul>
        <div className="footer-recent-news-sec">
          <h3 className="h3">Recent News.</h3>
          <div className="footer-calendar-sec">
            <img src={footerLogoSix} alt="" />
            <div>
              <h3 className="p">
                img Inspired Design Decisions Max Huber Turning
              </h3>
              <div>
                <FaCalendar></FaCalendar>
                <h5 className="h5">November 08, 2020</h5>
              </div>
            </div>
          </div>
          <div className="footer-calendar-sec">
            <img src={footerLogoSeven} alt="" />
            <div>
              <h3 className="p">
                img Inspired Design Decisions Max Huber Turning
              </h3>
              <div>
                <FaCalendar></FaCalendar>
                <h5 className="h5">November 08, 2020</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-contact-sec">
          <h3 className="h3">Contact Us</h3>
          <h5 className="h5">
            Sed ut persiatis unde omnis iste natusec error sit voluptatem
            accusantium
          </h5>
          <form className="footer-form">
            <input type="email" placeholder="Enter Your Email" />
            <SmallButton>
              <FiArrowRight />
            </SmallButton>
          </form>
          <div className="footer-contact-section-last-item">
            <FaPhone className="footer-phone"></FaPhone>
            <h5 className="h5">+012 (345) 678 99</h5>
          </div>
        </div>
      </div>
      <div className="footer-last-item">
        <p className="p">Copyright ©2022 BDevs. All Rights Reserved</p>
        <div className="footer-last-item-child-two">
          <div>
            <FaFacebookF></FaFacebookF>
          </div>
          <div>
            <FaTwitter></FaTwitter>
          </div>
          <div>
            <FaLinkedinIn></FaLinkedinIn>
          </div>
          <div>
            <FaInstagram></FaInstagram>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
