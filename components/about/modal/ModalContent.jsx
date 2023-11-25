import React from "react";
import Achievements from "../Achievements";
import PersonalInfo from "../PersonalInfo";
import Experience from "../Experience";
import Education from "../Education";
import Skills from "../Skills";

const ModalContent = () => {
  return (
    <>
      <div className="row">
        <div className="col-6">
          <h3>Sobre mí</h3>
          <p>Johnson Aquino Hidalgo</p>
          <h5>Bachiller en Ingeniería de Sistemas</h5>
          <p className="p_strong">Universidad Nacional del Centro del Perú</p>
          <PersonalInfo />
          <div className="edina_tm_button mb-3">
            <a href="img/sample.pdf" download className="color">
              Descargar CV
            </a>
          </div>
        </div>
        {/* End  PersonalInfo */}
        
        
        <div className="col-6 modal-tools">
                <div className="dodo_progress">
                  <h3>
                    Habilidades <span className="exp-ages">(Exp. en años)</span>
                  </h3>
                  <Skills />
                </div>
        </div>
        
        {/* <div className="col-6 achievements-wrapper">
          <h3>Habilidades</h3>
          <Achievements />
        </div> */}
        {/* End  Achievements */}


      </div>
      {/* End .row */}

      <div className="row resume-box">
        <br></br>
        <div className="col-exp">
          <h3>Experiencia laboral</h3>
          <Experience />
        </div>
        {/* End  Experience */}

        {/* <div className="col-6">
          <h3>Formación</h3>
          <Education />
        </div> */}
        {/* End  Education */}
      </div>
    </>
  );
};

export default ModalContent;
