import Nav from "react-bootstrap/Nav";
import Logo from "../Assets/Logo/MyLabs.png";

import { NavLink } from "react-router-dom";
function TopNavbar() {
  return (
    <Nav
      className="top-nav"
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <div className="web-title me-auto">
        <Nav.Item>
          <NavLink to="/home">
            <img src={Logo} className="logo" alt="logo"></img>
          </NavLink>
        </Nav.Item>
      </div>
      <button className="ham-btn">
        <div>
          <div className="ham-menu"></div>
          <br />
          <div className="ham-menu"></div>
          <br />
          <div className="ham-menu"></div>
        </div>
      </button>
      <div className="web-items">
        <Nav.Item>
          <NavLink to="/home" className="text-decoration-none">
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/skills" className="text-decoration-none">
            Skills
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink to="/experience" className="text-decoration-none">
            Experience
          </NavLink>
        </Nav.Item>
      </div>
    </Nav>
  );
}

export default TopNavbar;
