import { useState } from "react";
import Skills from "./Skills";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";
import Social from "../Social";

Modal.setAppElement("#__next");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="edina_tm_about" id="about">
      <div className="container">
        
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <div className="d-desktop" >
                <div className="about_title">
                  <h2 className="title">UI Designer | Frontend Developer</h2>
                </div>
                <h3 className="title">
                  Johnson Aquino 🇵🇪 🇵🇦
                </h3>
               </div> 
              <p >
                Llevo más de 4 años de experiencia en la creación de aplicaciones web, he trabajado en startups y equipos multidisciplinarios utilizando metodologías ágiles combinando mis habilidades técnicas y creativas en el desarrollo de productos digitales excepcionales.
              </p>
              <br></br>
              <p className="comment">
                <i>Me apasiona estar a la vanguardía de la técnología, siempre busco y estudio nuevas formas de hacer mejor mi trabajo, actualmente tengo intereses en IA y Product Managment.</i>
              </p>
            </div>
            <div className="edina_tm_hero-about">
              <div
              className="social"
              data-aos="fade-up"
              data-aos-duration="1200"
              data-aos-delay="400"
              >
                <Social />
              </div>
            </div>
            <div className="my_skills">
              {/* <h3 className="title">Aptitudes</h3> */}
              {/* <p className="desc">
                Me apasiona estar a la vanguardía de la técnología, siempre estudio y busco mejores formas de hacer mi trabajo, tengo intereses en Product Managment.
              </p> */}
              {/* <div className="wrapper">
                <div className="dodo_progress">
                  <Skills />
                </div>
              </div> */}

              <div className="edina_tm_button">
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  Ver más
                </button>
              </div>
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="d-mobile m-about" >
              <div className="about_title">
                <h2 className="title">UI Designer <br></br> Frontend Developer</h2>
              </div>
              <h3 className="title">
                Johnson Aquino 🇵🇪 🇵🇦
              </h3>
            </div>
            <div className="image">
              <img src="img/thumbs/26-35.jpg" alt="thumb" />
              <div
                className="main"
                style={{
                  backgroundImage: "url(img/about/photo-perfil.jpg)",
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              {/* <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>UI Designer</h3>
                  <span>&</span><br></br>
                  <span>Frontend Developer</span>
                </div>
              </div> */}
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>

      {/* Start About Details Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <img src="/img/svg/cancel.svg" alt="close icon" />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;
