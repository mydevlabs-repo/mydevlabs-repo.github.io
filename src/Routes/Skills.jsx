import React from "react";
import "../Components/style.css";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";
import SecuritySkills from "./Security";
import CloudSkills from "./Cloud";
import SkCards from "./SkCards";
import ReactLogo from "../Assets/React-icon.svg.png";
import AngularLogo from "../Assets/Angular.png";
import HtmlLogo from "../Assets/Html.png";
import CssLogo from "../Assets/css.png";
import BootstrapLogo from "../Assets/bootstrap.png";
import JsLogo from "../Assets/js.png";
import JavaLogo from "../Assets/java.png";
import NodeLogo from "../Assets/node.png";
import SpringBLogo from "../Assets/springboot.png";
import JenkinsLogo from "../Assets/jenkins.png";
import FotifyLogo from "../Assets/fortify.jpg";
import SonarcubeLogo from "../Assets/sonarcube.png";
import WebscanLogo from "../Assets/webscan.png";
import AwsLogo from "../Assets/aws.png";
import AzureLogo from "../Assets/Azure.png";
import StickyBar from "../Components/StickyBar";
function Skills() {
  return (
    <React.Fragment>
      <StickyBar></StickyBar>
      <div className="sk-container">
        <FrontEnd></FrontEnd>
        <div className="fe-container">
          {[
            {
              cardTitle: "React",
              cardDesc: "Hands On Experience",
              imgSrc: ReactLogo,
            },
            {
              cardTitle: "Angular",
              cardDesc: "Hands On Experience",
              imgSrc: AngularLogo,
            },
            {
              cardTitle: "JavaScript",
              cardDesc: "Hands On Experience",
              imgSrc: JsLogo,
            },
            {
              cardTitle: "Html",
              cardDesc: "Hands On Experience",
              imgSrc: HtmlLogo,
            },
            {
              cardTitle: "CSS",
              cardDesc: "Hands On Experience",
              imgSrc: CssLogo,
            },
            {
              cardTitle: "Bootstrap",
              cardDesc: "Hands On Experience",
              imgSrc: BootstrapLogo,
            },
          ].map((variant) => (
            <SkCards
              cardTitle={variant.cardTitle}
              cardDesc={variant.cardDesc}
              imgSrc={variant.imgSrc}
            ></SkCards>
          ))}
        </div>
        <BackEnd></BackEnd>
        <div className="fe-container">
          {[
            {
              cardTitle: "SpringBoot",
              cardDesc: "Hands On Experience",
              imgSrc: SpringBLogo,
            },
            {
              cardTitle: "NodeJS",
              cardDesc: "Hands On Experience",
              imgSrc: NodeLogo,
            },
            {
              cardTitle: "Java",
              cardDesc: "Hands On Experience",
              imgSrc: JavaLogo,
            },
          ].map((variant) => (
            <SkCards
              cardTitle={variant.cardTitle}
              cardDesc={variant.cardDesc}
              imgSrc={variant.imgSrc}
            ></SkCards>
          ))}
        </div>

        <SecuritySkills></SecuritySkills>
        <div className="fe-container">
          {[
            {
              cardTitle: "Fortify Scan",
              cardDesc: "Hands On Experience",
              imgSrc: FotifyLogo,
            },
            {
              cardTitle: "Webscan",
              cardDesc: "Hands On Experience",
              imgSrc: WebscanLogo,
            },
            {
              cardTitle: "SonarCube",
              cardDesc: "Hands On Experience",
              imgSrc: SonarcubeLogo,
            },
            {
              cardTitle: "Jenkins",
              cardDesc: "For VA/PT",
              imgSrc: JenkinsLogo,
            },
          ].map((variant) => (
            <SkCards
              cardTitle={variant.cardTitle}
              cardDesc={variant.cardDesc}
              imgSrc={variant.imgSrc}
            ></SkCards>
          ))}
        </div>

        <CloudSkills></CloudSkills>
        <div className="fe-container">
          {[
            {
              cardTitle: "AWS Cloud",
              cardDesc: "Self Learning WIP",
              imgSrc: AwsLogo,
            },
            {
              cardTitle: "Azure Cloud",
              cardDesc: "Hands On Experience",
              imgSrc: AzureLogo,
            },
          ].map((variant) => (
            <SkCards
              cardTitle={variant.cardTitle}
              cardDesc={variant.cardDesc}
              imgSrc={variant.imgSrc}
            ></SkCards>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Skills;
