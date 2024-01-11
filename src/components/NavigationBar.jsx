import React from "react";
import LinkedInIcon from "./LinkedInIcon";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons";


function NavigationBar() {
    return (
        <div class="navigationBar">
          <a href="https://tobiasthorsen.no">Home</a>
          <a href="https://github.com/twthor?tab=repositories">
            <FontAwesomeIcon icon={faGithub}  />
          </a>
          <LinkedInIcon profileUrl='https://linkedin.com/in/tobiaswiththorsen' />
          <a href="https://www.uib.no/studier/BAMN-DSIK">UiB</a>
          <a href="https://www.uio.no/studier/program/informasjonssikkerhet-master/">UiO</a>
          <a href={require('pictures/CV.pdf')} download="CV.pdf">CV </a>
        </div>
    );
}

export default NavigationBar;