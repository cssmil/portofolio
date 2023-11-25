import experienceContent from "../../data/experience";

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i} className="exp-laboral">
          <div className="icon">
            <img src="img/about/briefcase.png" alt="icon" />
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.companyAdress}</p>
          <p className="open-sans-font fnt-bold mt-2">{val.detailsEmpresa}</p>
          <p className="open-sans-font">{val.detailsA}</p>
          <p className="open-sans-font fnt-bold mt-2 ">{val.detailsFunciones}</p>
          <p className="open-sans-font">{val.detailsB}</p> 
          <p className="open-sans-font">{val.detailsC}</p> 
          <p className="open-sans-font">{val.detailsD}</p>
          <p className="open-sans-font">{val.detailsE}</p>
          <p className="open-sans-font">{val.detailsF}</p>
          <p className="open-sans-font">{val.detailsG}</p>
          <p className="open-sans-font">{val.detailsH}</p>
          <p className="open-sans-font">{val.detailsI}</p>
          <p className="open-sans-font">{val.detailsJ}</p>
          {/* <p className="open-sans-font">{val.detailsLogros}</p>
          <p className="open-sans-font">{val.detailsK}</p>
          <p className="open-sans-font">{val.detailsL}</p>
          <p className="open-sans-font">{val.detailsM}</p>
          <p className="open-sans-font">{val.detailsN}</p>
          <p className="open-sans-font">{val.detailsO}</p>
          <p className="open-sans-font">{val.detailsP}</p>
          <p className="open-sans-font">{val.detailsQ}</p> */}
          <p className="open-sans-font fnt-bold mt-2">{val.detailsTecnologias}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
