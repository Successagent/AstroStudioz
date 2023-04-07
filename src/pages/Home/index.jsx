import React, { useState } from "react";

import mockupImg from "../../assets/astro2.jpg";
import mockupImg2 from "../../assets/astro9.jpg";
import heroImg from "../../assets/hero_img.jpg";
import featuresImg from "../../assets/astro7.jpg";
import xpImg from "../../assets/25years.png";

import serviceImg from "../../assets/serviceImg.jpg";

import Loading from "../../components/HOCs/Loading";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import "./Home.css";
import Button from "../../components/Button/";
import { FeatureCard, ServiceCard, BlogCard } from "../../components/Card";

function Home() {
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero__text">
          <h3 className="sect__sub_header">— Welcome to AstroStudioz</h3>
          <h1>
            Come <br />
            Let AstroStudioz <br />
            Give You Some Cool <br />
            Nice Shoots
          </h1>
          <Button>Discover More</Button>
        </div>
      </section>
      <section className="sect">
        <h3 className="sect__sub_header">About our company</h3>
        <h2 className="sect__header">
          Printing your dream works with AstroStudioz
        </h2>
        <div className="sect sect--row sect--row_start">
          <div className="sect__img">
            <img src={featuresImg} alt="" />
          </div>
          <div className="sect__text">
            <div className="sect__text--row">
              <img className="wrap-image" src={xpImg} alt="" />
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantiu dolorem laudantium, totam rem aper iam eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beataese
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                volupta
              </p>
            </div>
            <div className="sect__text--col">
              <p className="text--gray">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantiu dolorem laudantium, totam rem aper iam eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beataese
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                volupta{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="sect">
        <h3 className="sect__sub_header">What we Offer</h3>
        <h2 className="sect__header">
          We provide Good Quality Studio Pictures
        </h2>
        <div className="showGrid">
          <div className="showGrid__row showGrid__row--1">
            <ServiceCard />
            <ServiceCard />
          </div>
          <div className="showGrid__row showGrid__row--2">
            <img src={serviceImg} alt="" />
            <div className="">
              <h3>Design & Good Pictures</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantiumse totam rem aperiam eaque ipsa
                quae abillo
              </p>
              <a href="http://">Read More</a>
            </div>
          </div>
          <div className="showGrid__row showGrid__row--3">
            <ServiceCard />
            <ServiceCard />
          </div>
        </div>
      </section> */}
      <section className="sect sect--row sect--blue">
        <div className="sect__text">
          <h3 className="sect__sub_header">Need any Good Photo</h3>
          <h2 className="sect__header">Why people choose AstroStudioz</h2>
          <p>
            Quote Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo
          </p>
          <Button>Meet with us</Button>
        </div>
        <div className="sect__img">
          <img src={mockupImg2} alt="" />
        </div>
      </section>

      <section className="sect sect--row-reverse">
        <div className="sect__text">
          <h3 className="sect__sub_header">What we Do</h3>
          <h2 className="sect__header">Why people choose AstroStudioz</h2>
          <p>
            Sed ut perspiciatis unde omnis iste natus erroluptatem accusantium
            doloremque laudantium, totam rem aeaque ipsa quae ab illo inventore
            veritatis et quasi
          </p>
          <ul>
            <li>Professional & Experienced</li>
            <li>Low Cost & Digital Printing Agency</li>
            <li>Pixel Perfect and Accurate Printing</li>
            <li>Transport & Low Transportations Cost</li>
            <li>Exclusive Team Members</li>
          </ul>
          <Button>Learn more</Button>
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

export default Loading(Home);
