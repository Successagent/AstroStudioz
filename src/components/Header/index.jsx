import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/astrosoft.svg";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import HeaderStyles from "./Header.module.css";
import SideMenu from "./SideMenu";
import { Button, SmallButton } from "../Button";
const HeaderContent = ({ setIsSideMenuOpen }) => {
  return (
    <>
      <div className={HeaderStyles.logo}>
        <img src={logo} alt="astrosoft" width="60" />
      </div>

      <ul className={HeaderStyles.links}>
        <Link to={"/"}>
          <li className={HeaderStyles.link}>Home</li>
        </Link>
        <Link to={"/about"}>
          <li className={HeaderStyles.link}>About</li>
        </Link>
        <Link to={"/services"}>
          <li className={HeaderStyles.link}>Services</li>
        </Link>
        <Link to={"/faq"}>
          <li className={HeaderStyles.link}>Faq</li>
        </Link>
        <Link to={"/contact"}>
          <li className={HeaderStyles.link}>Contact</li>
        </Link>
      </ul>

      <div className={HeaderStyles.buttonSet}>
        <SmallButton width={"50px"}>Q</SmallButton>
        <Button>Get A Quote</Button>
      </div>
      <button
        className={HeaderStyles.menuBtn}
        onClick={() => setIsSideMenuOpen(true)}
      >
        <AiOutlineMenu />
      </button>
    </>
  );
};

function Header() {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const {
    ref: headerRef,
    inView,
    entry,
  } = useInView({
    threshold: 1,
  });
  return (
    <>
      <header ref={headerRef} className={HeaderStyles.header}>
        <HeaderContent setIsSideMenuOpen={setIsSideMenuOpen} />
      </header>
      {!inView && (
        <header
          className={`${HeaderStyles.header} ${HeaderStyles.stickyHeader}`}
        >
          <HeaderContent setIsSideMenuOpen={setIsSideMenuOpen} />
        </header>
      )}
      <SideMenu isOpen={isSideMenuOpen} setIsOpen={setIsSideMenuOpen} />
    </>
  );
}

export default Header;
