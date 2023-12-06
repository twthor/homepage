import React from "react";

function ProjectItem({ link, projectTitle, projectDescription, pictureSrc }) {
    return (
        <div class="projectLink">
            <a href={link}>
                <p class="companyName">{projectTitle}</p>
                <img src={pictureSrc} alt="illustrational" class="image"/>
            </a>
            <br></br>
            {projectDescription}
        </div>
    );
}

export default ProjectItem;