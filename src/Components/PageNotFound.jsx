import { Link } from "react-router-dom";
import "../App.css";
import InvalidRoute from "../Assets/pgnotfound.jpg";
function PageNotFound() {
  return (
    <div className="invalid-route">
      <img
        src={InvalidRoute}
        style={{ display: "block", margin: "auto" }}
        alt="invalid route"
      ></img>
      <h1>Page Not Found</h1>
      <h6>But here's something you can always find </h6>
      <Link to="/home">Go Back Homepage</Link>
    </div>
  );
}
export default PageNotFound;
