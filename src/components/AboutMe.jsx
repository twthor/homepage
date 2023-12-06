import React from "react";

function AboutMe() {
    return (
        <div>
            <h2 align="center">About Me</h2>
            <img class="profilepicture" src={require('pictures/kroatia2022.jpg')} alt="Kroatia 2022"></img>
            <div class="textbox">
                <p class="jobDescription">I am studying Cyber Security at Univeristy of Bergen, and is on my last year of the bachelor.
                I am planning to take the master's degree "Informatikk: Informasjonssikkerhet" at University of Oslo.
                </p>
            </div>
        </div>
    );
}

export default AboutMe;