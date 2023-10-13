import AboutCardLogoOne from "../../../assets/astro5.jpg";
import AboutCardLogoTwo from "../../../assets/astro13.webp";
import AboutCardLogoThree from "../../../assets/astro2 (1).webp";

const AboutCard = () => {
  return (
    <section className="about-card">
      <div>
        <div>
          <img src={AboutCardLogoOne} alt="" />
        </div>
        <div className="about-card-items">
          <h3 className="h3">Creativity</h3>
          <p className="h5">
            We believe in pushing the boundaries of photography and exploring
            new and innovative ways to capture beautiful moments.
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={AboutCardLogoTwo} alt="" />
        </div>
        <div className="about-card-items">
          <h3 className="h3">Quality</h3>
          <p className="h5">
            We believe in delivering high-quality photographs that exceed our
            clients' expectations and stand the test of time.
          </p>
        </div>
      </div>
      <div>
        <div>
          <img src={AboutCardLogoThree} alt="" />
        </div>
        <div className="about-card-items">
          <h3 className="h3"> Professionalism</h3>
          <p className="h5">
            We are committed to providing our clients with the highest level of
            professionalism, from our communication to our photography skills.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutCard;
