import React from 'react';
import './styles/homepage.css';
import EducationWindow from 'components/EducationWindow';
import CourseWindow from 'components/CourseWindow';
import ProjectWindow from 'components/ProjectWindow';
import WorkExperienceWindow from 'components/WorkExperienceWindow';
import NavigationBar from 'components/NavigationBar';
import Header from 'components/Header';
import AboutMe from 'components/AboutMe';
import Footer from 'components/Footer';


function App() {
  
  return (
    <div>
      <div class="container">
        <Header />
      </div>
      <body>
        <NavigationBar />
        <div class="row">
          <div class="side">
            <AboutMe />
            <h3>Universities:</h3>
            <a href="https://www.uib.no/studier/BAMN-DSIK">Univeristy of Bergen - My bachelor degree</a>
            <p></p>
            <a href="https://www.uio.no/studier/program/informasjonssikkerhet-master/">Univeristy of Oslo - planned master's degree</a>
          </div>
          <div class="main">
            <div class="displayWindows">
              <ProjectWindow />
              <br></br>
              <WorkExperienceWindow />
              <br></br>
              <EducationWindow />
              <br></br>
              <CourseWindow />
            </div>
          </div>
        </div>
      </body>
      <Footer footerText='Made by Tobias With Thorsen'/>
    </div>
  );
}

export default App;
