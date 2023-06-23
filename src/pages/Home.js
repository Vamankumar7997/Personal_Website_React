import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2>Hi, This is Vaman Kumar</h2>
        <div className="prompt">
          <p>
            A software developer with a passionate for learning and creating.
          </p>
          <a href="https://www.linkedin.com/in/vaman-kumar-tamarana/">
            <LinkedInIcon />
          </a>
          <a href="mailto:tamaranavamankumar@gmail.com">
            <EmailIcon />
          </a>
          <a href="https://github.com/Vamankumar7997">
            <GitHubIcon />
          </a>
        </div>
      </div>

      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>ReactJS, Redux, HTML, CSS, BootStrap, NPM, SCSS</span>
          </li>

          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MongoDB, MYSQL, RESTFUL, API</span>
          </li>

          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
