import React from "react";
import ProjectItem from "./ProjectItem";
// should import pictures like this because of issues with relative paths etc.
import webscrapingimg from "pictures/webscraping.jpg" 
import websiteCodeImg from "pictures/codefromwebsite.jpg"
import videogameImg from "pictures/moustachemania.png"


function Projects() {
    return (
        <div>
            <ProjectItem link={"https://github.com/twthor/WebScraping"} projectTitle={"Web Scraping"} projectDescription={"Wanted to get the current price of stocks to add them to my Google spreadsheet."} pictureSrc={webscrapingimg}/>
            <ProjectItem link={"https://github.com/twthor/homepage"} projectTitle={"This website"} projectDescription={"Made myself a homepage using React. Both to learn some React and to have a resume available at all times 😄."} pictureSrc={websiteCodeImg}/>
            <ProjectItem link={"https://github.com/twthor/Git-Rekt"} projectTitle={"Video game: 'Moustache Mania'"} projectDescription={"During a course in university, I made this 2D platformer game together with a group of other students."} pictureSrc={videogameImg} />
        </div>
    );
}

export default Projects;