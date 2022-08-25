import React from "react";
import "./intro.css";
const Intro = () => {
  return (
    <div className="app__intro">
      <div className="main-text">
        <h1>Sohan Agashimani</h1>
        <p>Welcome to my Page!</p>
        <br />
        <p>
          Hi, I’m Sohan an engineer turned into a self-taught web developer,
          learning new ways to develop web-apps. I like actively participating
          in projects. Currently looking for opportunities to incorporate my
          skills and training to help the company grow. I am looking forward to
          roles that will help me realise my potential by exploring the various
          aspects of this field.
        </p>
        <br />
        <a href="#app__footer">contact me </a>
      </div>
      <div className="hero-image">
        <div className="cube" id="react"></div>
        <div className="cube" id="javascript"></div>
        <div className="cube" id="html"></div>
        <div className="cube" id="css"></div>
      </div>
    </div>
  );
};

export default Intro;
