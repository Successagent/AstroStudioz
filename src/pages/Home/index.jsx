import React from "react";

import mockupImg from "../../assets/astro2 (1).webp";
import mockupImg2 from "../../assets/astro9.jpg";
import featuresImg from "../../assets/astro7.jpg";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import "./Home.css";
import Button from "../../components/Button";

function Home() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero__text">
          <a
            id="option_one"
            href="https://poawooptugroo.com/4/8887923"
            rel="noopener noreferrer"
          >
            <h3 className="sect__sub_header">
              — Welcome to AstroStudioz Movies
            </h3>
          </a>
          <h1>
            Come <br />
            Let AstroStudioz Movies
            <br />
            Give You Some Cool <br />
            Nice Shoots
          </h1>

          <Button>Discover More</Button>
        </div>
      </section>
      <div id="container-8487f12894e86d958e3934ea75890700"></div>
      <section className="sect">
        <h3 className="sect__sub_header">About our company</h3>

        <h2 className="sect__header">
          Get your dream Pictures with AstroStudioz Movies
        </h2>
        <div className="sect sect--row sect--row_start">
          <div className="sect__img">
            <a id="option_two" rel="noopener noreferrer">
              <img src={featuresImg} alt="" />
            </a>
          </div>
          <div className="sect__text">
            <div className="sect__text--row">
              <p>
                This stunning photograph captures a perfect moment of joy for
                the Young man here, with the vibrant colors and natural lighting
                adding a magical touch. It's a true testament to the exceptional
                photography skills and creative eye of the AstroStudioz Movies
                team.
              </p>
            </div>
            <div className="sect__text--col">
              <a
                href="https://www.profitablecpmrate.com/w3ratsn2rb?key=43a1b6b92453d5d71d3e8528893d7a05"
                rel="noopener noreferrer"
              >
                <p className="text--gray">
                  AstroStudioz Movies would love to be selected as the official
                  photographer for a major international event, such as the
                  Olympic Games or a high-profile music festival. Being chosen
                  for such an event would not only be a tremendous honor but
                  also provide the opportunity to showcase our creative talents
                  and exceptional photography skills on a global stage. It would
                  also help us to attract even more high-profile clients and
                  expand our reach as a top-tier photography studio.
                </p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="sect sect--row sect--blue">
        <div className="sect__text">
          <h3 className="sect__sub_header">Need any Good Photo</h3>
          <h2 className="sect__header">
            Why people choose AstroStudioz Movies
          </h2>
          <p>
            For its distinctive and cutting-edge approach to photography,
            AstroStudioz Movies is renowned. We test the limits of conventional
            photography and look for fresh, imaginative approaches to capturing
            lovely moments. Our talented team of photographers is always looking
            for fresh ideas and methods to produce outstanding outcomes.
          </p>
        </div>
        <div className="sect__img">
          <img src={mockupImg2} alt="" />
        </div>
      </section>
      <section className="sect sect--row-reverse">
        <div className="sect__text">
          <h3 className="sect__sub_header">What we Do</h3>
          <h2 className="sect__header">
            Why people choose AstroStudioz Movies
          </h2>
          <p>
            At AstroStudioz Movies, we believe that exceptional customer service
            is just as important as exceptional photography. We work closely
            with our clients to understand their needs and preferences, and we
            strive to provide a stress-free and enjoyable experience during the
            photography session. Our team is always available to answer any
            questions and provide support throughout the entire process.
          </p>
          <ul>
            <li>Professional & Experienced</li>
            <li>Low Cost & Digital Printing Agency</li>
            <li>Pixel Perfect and Accurate Printing</li>
          </ul>
        </div>
        <div className="sect__img">
          <img src={mockupImg} alt="" />
        </div>
      </section>
      <section className="sect">
        <h3 className="sect__sub_header">Our Recent Works</h3>
        <h2 className="sect__header">Let's See our latest projects</h2>
        <div className="work_grid">
          <div className="work work1"></div>
          <div className="work work2"></div>
          <div className="work work3"></div>
          <div className="work work4"></div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
