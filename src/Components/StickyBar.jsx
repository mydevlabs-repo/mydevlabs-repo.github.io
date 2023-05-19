import Linkedin from "../Assets/linkedin.png";
import Git from "../Assets/github.png";
import "../Components/style.css";
function StickyBar() {
  return (
    <div className="sticky-bar">
      <div className="get-in-touch">Get in Touch</div>
      <div style={{ display: "flex" }}>
        <div className="touch-logo">
          <a
            href="https://www.linkedin.com/in/himanshu-s-7801a1bb/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Linkedin} alt="LinkedIn" />
          </a>
        </div>
        <div className="touch-logo">
          <a
            href="https://github.com/mydevlabs-repo"
            target="_blank"
            rel="noreferrer"
          >
            <img src={Git} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
}
export default StickyBar;
