import React from "react";

function AboutMe() {
    return (
        <div>
            <h2 align="center">About Me</h2>
            <img class="profilepicture" src={require('pictures/kroatia2022.jpg')} alt="Kroatia 2022"></img>
            <div class="textbox">
                <p class="jobDescription">I am studying Computer Security at the University of Bergen, and am in my last semester of the bachelor's program.
                I am planning to pursue a master's degree in "Informatics: Information Security" at the University of Oslo.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;