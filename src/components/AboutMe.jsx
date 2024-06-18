import React from "react";

function AboutMe() {
    return (
        <div>
            <h2 align="center">About Me</h2>
            <img class="profilepicture" src={require('pictures/portrettbilde.jpeg')} alt="portrett"></img>
            <div class="textbox">
                <p class="jobDescription">I have recently finished a bachelor's degree in Computer Security at the University of Bergen. 
                I am planning to pursue the master's degree 'Informatics: Information Security' at the University of Oslo.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;