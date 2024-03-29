import React, { useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useState } from "react";
import HeaderHorizontal from "../../header/HeaderHorizontal";
import Hero from "../../hero/Hero";
import About from "../../about/About";
import Service from "../../service/Service";
import Portfolio from "../../portfolio/Portfolio";
import Testimonial from "../../testimonial/Testimonial";
import Blog from "../../blog/Blog";
import Contact from "../../Contact";
import Address from "../../Address";
import Map from "../../Map";
import HeaderMobile from "../../header/HeaderMobile";

const EdinaHorizontal = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.querySelector("body").classList.remove("rtl");
  }, []);

  const handleLabelClick = () => {
    if (isDark) {
      localStorage.setItem("theme-color", "theme-light");
      document.querySelector("body").classList.add("theme-light");
      document.querySelector("body").classList.remove("theme-dark");
      setIsDark(false);
    } else {
      localStorage.setItem("theme-color", "theme-dark");
      document.querySelector("body").classList.add("theme-dark");
      document.querySelector("body").classList.remove("theme-light");
      setIsDark(true);
    }
  };

  return (
    <div className={`home-light ${isDark ? "theme-dark" : ""}`}>
      {/* Start Dark & Light Mode Swicher  */}
      <label
        className={`theme-switcher-label horizontal d-flex  ${
          isDark ? "active" : ""
        }`}
      >
        <input
          type="checkbox"
          onClick={handleLabelClick}
          className="theme-switcher"
        />
        <div className="switch-handle">
          <i className="light-text" title="Switch to Dark">
            <FaMoon />
          </i>
          <i className="dark-text" title="Switch to Light">
            <FaSun />
          </i>
        </div>
      </label>
      {/* End Dark & Light Mode Swicher  */}

      <header className="header-area">
        <div className="header-inner">
          <HeaderMobile />
        </div>
      </header>
      {/* End mobile-header */}

      <HeaderHorizontal />
      {/* End Header */}

      <About />
      {/* End Hero */}

      {/* <Hero /> */}
      {/* End Hero */}
      
      {/* <div className="edina_tm_portfolio" id="portfolio">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Proyectos</h3>
            <p>
              Ultimos proyectos en los que he trabajado o participado como diseñador y desarrollador 
            </p>
          </div>
 
          <Portfolio />
        </div>
      </div> */}

      

      {/* <div className="edina_tm_services" id="service">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Servicios</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>

          <Service />
        </div>
      </div> */}


      
      
      {/* <div className="edina_tm_testimonials" id="testimonial">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Testimonials</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>
          <div className="list ">
            <ul>
              <Testimonial />
            </ul>
          </div>
        </div>
      </div> */}



      {/* <div className="edina_tm_news" id="blog">
        <div className="container">
          <div className="edina_tm_title">
            <h3>Blog</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              ipsum sit nibh amet egestas tellus.
            </p>
          </div>

          <Blog />
        </div>
      </div> */}



        

          {/* <div className="edina_tm_title">
            <h3>Contacto</h3>
          </div>
          <div className="extra_info">
            <Address />
          </div> */}

          {/* <div className="mainpart">
            <div
              className="left"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <div className="title">
                <p>
                  I am always open to discussing product
                  <br />
                  <span> design work or partnerships.</span>
                </p>
              </div>

              <div className="fields">
                <Contact />
              </div>

            </div>
            <div
              className="right"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <Map />
            </div>

          </div> */}




      {/* /CONTACT */}
    </div>
  );
};

export default EdinaHorizontal;
