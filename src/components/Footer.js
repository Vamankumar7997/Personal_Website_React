import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com/its_me_vaman/">
          <InstagramIcon />
        </a>
        <a href="https://twitter.com/vamankumar55">
          <TwitterIcon />
        </a>
        <a href="https://github.com/Vamankumar7997">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/vaman-kumar-tamarana/">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 Vaman Kumar</p>
    </div>
  );
}

export default Footer;
