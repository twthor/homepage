import React from "react";
import ProjectItem from "./ProjectItem";
// should import pictures like this because of issues with relative paths etc.
import webscrapingimg from "pictures/webscraping.jpg" 


function Projects() {
    return (
        <div>
            <ProjectItem link={"https://github.com/twthor/WebScraping"} projectTitle={"Web Scraping"} projectDescription={"Wanted to web scrape current stock prices and add them to my Google spreadsheet."} pictureSrc={webscrapingimg}/>
            <ProjectItem link={"https://github.com/twthor/homepage"} projectTitle={"This website"} projectDescription={"Made myself a homepage using the react framework. Both to learn react and to have a portfolio / CV available at all times 😄."} pictureSrc={""}/>
        </div>
    );
}

export default Projects;