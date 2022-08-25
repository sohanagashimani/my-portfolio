import React from "react";
import "./footer.css";
import {
  AiOutlineMail,
  AiOutlineLinkedin,
  AiOutlineGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="app__footer" id="app__footer">
      <div className="app__footer-links">
        <p>
          <a className="myMail" href="mailto:sohanagashimanii@gmail.com">
            <AiOutlineMail size="49" />
          </a>
        </p>
        <p>
          <a className="myGithub" href="https://github.com/sohanagashimani">
            <AiOutlineGithub size="49" />
          </a>
        </p>
        <p>
          <a
            className="myLinkedIn"
            href="https://www.linkedin.com/in/sohan-a-1161601b4/"
          >
            <AiOutlineLinkedin size="49" />
          </a>
        </p>
      </div>
      <p className="footer-text">Made with love by Sohan Agashimani.</p>
    </div>
  );
};

export default Footer;
