import React, { useState } from "react";
import "../Components/style.css";
import Graduation from "./Graduation";

import { Link, useOutlet } from "react-router-dom";
function Education() {
  const Outlet = useOutlet();

  const [isGrad, setIsGrad] = useState(true);
  const [isSsc, setIsSsc] = useState(false);
  const [isHsc, setIsHsc] = useState(false);

  const GradToggle = () => {
    setIsGrad(true);
    setIsHsc(false);
    setIsSsc(false);
  };

  const SscToggle = () => {
    setIsGrad(false);
    setIsHsc(false);
    setIsSsc(true);
  };

  const HscToggle = () => {
    setIsGrad(false);
    setIsHsc(true);
    setIsSsc(false);
  };
  return (
    <React.Fragment>
      <div className="education-container jumbotron">
        <div className="ed-heading">Educational Qualifications</div>
        <div className="ed-separator"></div>
        <div className="ed-in">
          <div className="ed-link col-lg-3">
            <div className="ed-btn">
              <Link
                className={`ed-btn-txt ${isGrad ? "ed-active" : ""}`}
                to="/home/grad"
                onClick={GradToggle}
              >
                Graduation
              </Link>
            </div>
            <div className="mt-5 ed-btn">
              <Link
                className={`ed-btn-txt ${isSsc ? "ed-active" : ""}`}
                to="/home/ssc"
                onClick={SscToggle}
              >
                SSC
              </Link>
            </div>
            <div className="mt-5 ed-btn">
              <Link
                className={`ed-btn-txt ${isHsc ? "ed-active" : ""}`}
                to="/home/hsc"
                onClick={HscToggle}
              >
                HSC
              </Link>
            </div>
          </div>
          <div className="ed-cont col-lg-9">
            {Outlet || <Graduation />}
            {/* <Outlet></Outlet> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Education;
