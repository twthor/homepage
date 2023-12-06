import React from "react";
import ProjectItem from "./ProjectItem";


function Projects() {
    var WebScraping = "/pictures/webscraping.jpg";
    return (
        <div>
            <ProjectItem link={"https://github.com/twthor/WebScraping"} projectTitle={"Web Scraping"} projectDescription={"Wanted to web scrape current stock prices and add them to my Google spreadsheet."} pictureSrc={WebScraping}/>
            <ProjectItem link={"https://github.com/twthor/homepage"} projectTitle={"This website"} projectDescription={"Made myself a homepage using the react framework. Both to learn react and to have a portfolio / CV available at all times 😄."} pictureSrc={""}/>
        </div>
    );
}

export default Projects;