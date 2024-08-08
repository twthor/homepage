import React from "react";

function AboutMe() {
    return (
        <div className="aboutme-container">
            <div className="aboutme-content">
                <h3>Hi! I am </h3>
                <h1 className="aboutme-header">
                   <span className="name">Tobias With Thorsen</span> 
                </h1>
                <h3>Information Security student at University of Oslo</h3>
                <div className="aboutme-textbox">
                    <p className="aboutme-description">
                        I am currently pursuing the master's degree 'Informatics: Information Security' at the University of Oslo.
                        <br></br>
                        I have recently finished a bachelor's degree in Computer Security at the University of Bergen. 
                    </p>
                </div>  
            </div>
            <div className="aboutme-picture">
                <img className="profilepicture" src={require('pictures/portrettbilde.jpeg')} alt="portrett"></img>
            </div>
        </div>
    );
}

export default AboutMe;