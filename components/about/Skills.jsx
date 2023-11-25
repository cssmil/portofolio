import React from "react";

const skillsContent = [
  {
    name: "React.Js",
    skillPercent: "96",
    ages: "+4"
  },
  {
    name: "Js, Css, Html",
    skillPercent: "96",
    ages: "+4"
  },
  {
    name: "Material UI, B5",
    skillPercent: "96",
    ages: "+4"
  },
  {
    name: "Figma",
    skillPercent: "96",
    ages: "+4"
  },
  {
    name: "UI",
    skillPercent: "96",
    ages: "+4"
  },
  {
    name: "UX",
    skillPercent: "90",
    ages: "+3"
  },
  {
    name: "WordPress",
    skillPercent: "96",
    ages: "+4"
  },
  {
    name: "Photoshop",
    skillPercent: "96",
    ages: "+4"
  },
  
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="progress_inner" key={i}>
          <span className="label">{val.name}</span><span className="exp-ages">{val.ages}</span>
          <div className="background">
            <div className="bar">
              <div
                className="bar_in"
                style={{ width: val.skillPercent + "%" }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skills;
