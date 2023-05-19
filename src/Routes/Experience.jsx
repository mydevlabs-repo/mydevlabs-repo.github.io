import ExCards from "../Components/ExCards";
import "../Components/style.css";
import InfyLogo from "../Assets/Infy.jpg";
import TcsLogo from "../Assets/tcs.png";
import MogliLogo from "../Assets/moglix.png";
import StickyBar from "../Components/StickyBar";

function Experience() {
  return (
    <>
      <StickyBar></StickyBar>
      <div className="experience-container">
        {[
          {
            cardTitle: "Infosys",
            designation: "Technology Analyst",
            Responsibilities:
              "Cloud Engineer | Full Stack Developer | AEM Developer",
            imgSrc: InfyLogo,
            bColor: "#0579c2",
            tenure: `Mar' 2023 to Present`,
          },
          {
            cardTitle: "TCS",
            designation: "Systems Engineer",
            Responsibilities:
              "Full Stack Developer | Security Ninja | Cloud Architecture Spoc | Project Induction Trainer",
            imgSrc: TcsLogo,
            bColor: "#a309b6",
            tenure: `Nov' 2020 to Mar' 2023`,
          },
          {
            cardTitle: "Moglix",
            designation: "Digital Marketing and Analytics Intern",
            Responsibilities:
              "Digital Marketing | Competitive Research Analyst | Data Analyst",

            imgSrc: MogliLogo,
            bColor: "#db232e",
            tenure: `May' 2019 to July 2019`,
          },
        ].map((variant) => (
          <ExCards
            cardTitle={variant.cardTitle}
            Designation={variant.designation}
            Responsibilities={variant.Responsibilities}
            imgSrc={variant.imgSrc}
            bColor={variant.bColor}
            tenure={variant.tenure}
          ></ExCards>
        ))}
      </div>
    </>
  );
}

export default Experience;
