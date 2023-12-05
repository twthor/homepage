import React from "react";
import LinkedInIcon from "./LinkedInIcon";

function NavigationBar() {
    return (
        <div class="navigationBar">
          <a href="http://localhost:3000">Home</a>
          <a href="https://github.com/twthor?tab=repositories">GitHub</a>
          <LinkedInIcon profileUrl='https://no.linkedin.com/in/tobias-with-thorsen-a64254161?original_referer=https%3A%2F%2Fwww.google.com%2F' />
        </div>
    );
}

export default NavigationBar;