import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import SideMenuStyles from "./SideMenu.module.css";
import { Button, SmallButton } from "../Button";

function SideMenu({ isOpen, setIsOpen }) {
  const dummyFunc = () => {};
  isOpen = isOpen || false;
  setIsOpen = setIsOpen || dummyFunc;
  return (
    <div
      className={`${SideMenuStyles.wrapper} ${
        !isOpen ? SideMenuStyles.wrapperClose : ""
      }`}
    >
      <div
        className={`${SideMenuStyles.backdrop} ${
          !isOpen ? SideMenuStyles.backdropClose : ""
        }`}
        onClick={() => setIsOpen(false)}
      />
      <aside
        className={`${SideMenuStyles.container} ${
          !isOpen ? SideMenuStyles.containerClose : ""
        }`}
      >
        <button
          className={SideMenuStyles.close}
          onClick={() => setIsOpen(false)}
        >
          <AiOutlineClose />
        </button>

        <ul className={SideMenuStyles.links}>
          <Link to={"/"}>
            <li className={SideMenuStyles.link}>
              <p>Home</p>
            </li>
          </Link>
          <Link to={"/about"}>
            <li className={SideMenuStyles.link}>
              <p>About</p>
            </li>
          </Link>
          <Link to={"/services"}>
            <li className={SideMenuStyles.link}>
              <p>Services</p>
            </li>
          </Link>
          <Link to={"/contact"}>
            <li className={SideMenuStyles.link}>
              <p>Contact</p>
            </li>
          </Link>
          <Link to={"/faq"}>
            <li className={SideMenuStyles.link}>
              <p>FAQ</p>
            </li>
          </Link>
        </ul>

        <div className={SideMenuStyles.buttonSet}>
          {/* <SmallButton width={"50px"}>Q</SmallButton> */}
          {/* <Button>Get A Quote</Button> */}
        </div>
      </aside>
    </div>
  );
}

export default SideMenu;
