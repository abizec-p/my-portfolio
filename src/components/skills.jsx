import "./skills.css";
import html5 from '../files/icons/html5.png'
import css3 from "../files/icons/css3.png";
import reactJS from "../files/icons/react.png";
import js from "../files/icons/js.png";
import Photoshop from "../files/icons/ps.png";
import Illustrator from "../files/icons/illustrator.png";
import Indesign from "../files/icons/indesign.png";
import premiere from "../files/icons/premiere pro.png";
import Figma from "../files/icons/figma.png";

function skills() {
  const skillItems = [
    {
      title: "Web development",
      skillSet: [
        {
          itemName: "Html5",
          image: html5,
        },
        {
          itemName: "CSS3",
          image: css3,
        },
        {
          itemName: "ReactJs",
          image: reactJS,
        },
        {
          itemName: "Javascript",
          image: js,
        },
      ],
    },
    {
      title: "Graphics designing",
      skillSet: [
        {
          itemName: "Adobe Photoshop",
          image: Photoshop,
        },
        {
          itemName: "Adobe Illustrator",
          image: Illustrator,
        },
        {
          itemName: "Adobe Indesign",
          image: Indesign,
        },
        {
          itemName: "Adobe premiere pro",
          image: premiere,
        },
        {
          itemName: "figma",
          image: Figma,
        },
      ],
    },
  ];

  return (
    <section id="skillsID" className="skillsSection">
      <div className="skillsText">
        <h1>What I am actually good at?</h1>
      </div>
      <div className="skillsMainBody">
        {skillItems.map((item, index) => (
          <div className="skillsCard">
            <div className="skillsContainerHeading" key={index}>
              <h1>{item.title}</h1>
              <div className="skillsContainer">
                {item.skillSet.map((data, i) => (
                  <div className="skillsContainerList">
                    <img src={data.image} alt="img"></img>
                    <div key={i}>{data.itemName}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bottomLineSkills"></div>
    </section>
  );
}

export default skills;
