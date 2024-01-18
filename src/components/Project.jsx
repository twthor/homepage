import React from "react";
import ProjectItem from "./ProjectItem";
// should import pictures like this because of issues with relative paths etc.
import webscrapingimg from "pictures/webscraping.jpg" 
import websiteCodeImg from "pictures/codefromwebsite.jpg"


function Projects() {
    return (
        <div>
            <ProjectItem link={"https://github.com/twthor/WebScraping"} projectTitle={"Web Scraping"} projectDescription={"Wanted to web scrape current stock prices and add them to my Google spreadsheet."} pictureSrc={webscrapingimg}/>
            <ProjectItem link={"https://github.com/twthor/homepage"} projectTitle={"This website"} projectDescription={"Made myself a homepage using React. Both to learn some React and to have a resume available at all times 😄."} pictureSrc={websiteCodeImg}/>
        </div>
    );
}

export default Projects;