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
          <LinkedInIcon profileUrl='https://linkedin.com/in/tobiaswiththorsen' />
          <a href="https://www.uib.no/studier/BAMN-DSIK">UiB</a>
          <a href="https://www.uio.no/studier/program/informasjonssikkerhet-master/">UiO</a>
        </div>
    );
}

export default NavigationBar;