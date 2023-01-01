import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Owasp from "../../assets/logo-owasp.png";
import "../../assets/css/navbar-extended.css";
import URL from "../../util/url";

const SignIn = ({ user }) => {
  return (
    <>
      <div className="navbarprat">
        <ul>
          <li>
            <a href="">
              <img className="navbarprat-logo" alt="LOGO" src={Owasp} />
            </a>
          </li>
          <li>
            <a href={`${URL}/api/user/login`} className="navbarprat-link">
              Sign In
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SignIn;
