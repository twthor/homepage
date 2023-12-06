import React from "react";
import LinkedInIcon from "./LinkedInIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function NavigationBar() {
    return (
        <div class="navigationBar">
          <a href="http://localhost:3000">Home</a>
          <a href="https://github.com/twthor?tab=repositories">
            <FontAwesomeIcon icon={faGithub}  />
          </a>
          <LinkedInIcon profileUrl='https://no.linkedin.com/in/tobias-with-thorsen-a64254161?original_referer=https%3A%2F%2Fwww.google.com%2F' />
        </div>
    );
}

export default NavigationBar;