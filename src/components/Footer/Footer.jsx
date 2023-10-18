import React from "react";
import "./footer.css";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BiChevronsRight } from "react-icons/bi";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import waves from "../../assets/footer-top-waves.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <img src={waves} alt="" className="waves" />
        <h2>We provide businesses with the right tools to grow faster </h2>
        <Link to="/" className="btn">
          Contact Us <BiChevronsRight />
        </Link>
      </div>

      <div className="bottom">
        <div className="grid">
          <div className="item one">
            <div className="logo">
              <h2>Astrosoft Group</h2>
            </div>
            <p>
              Leading provider of innovative solutions for businesses of all
              sizes and industry.
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
          <div className="item two">
            <h2>Companies</h2>
            <ul>
              <li>
                <BiChevronsRight /> Astrosoft Group
              </li>
              <li>
                <BiChevronsRight /> Astrosoft development
              </li>
              <li>
                <BiChevronsRight /> Astroprints
              </li>
              <li>
                <BiChevronsRight />
                Astrostudioz
              </li>
              <li>
                <BiChevronsRight /> Astro arch & Engineering
              </li>
            </ul>
          </div>
          <div className="item three">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <BiChevronsRight /> About
              </li>
              <li>
                <BiChevronsRight /> Leadership
              </li>
              <li>
                <BiChevronsRight /> News/Events
              </li>
            </ul>
          </div>
          <div className="item four">
            <h2>Office Address</h2>
            <ul>
              <li>
                <a
                  href="https://goo.gl/maps/7PRsQXi31SJm1jwy7"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BiChevronsRight /> Kares Plaza, Greevilla Express Rd, Yenagoa
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="copyright">
          <p>Copyright 2023 - All Rights Reserved By Astrosoft Group</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
