import React from 'react';
import './styles/homepage.css';
import EducationWindow from 'components/EducationWindow';
import CourseWindow from 'components/CourseWindow';
import ProjectWindow from 'components/ProjectWindow';
import WorkExperienceWindow from 'components/WorkExperienceWindow';
import AboutMe from 'components/AboutMe';
import ContactMe from 'components/ContactMe';
import Header from 'components/Header';
import Footer from 'components/Footer';
import NavigationBar from 'components/NavigationBar';

function App() {
  
  return (
    <div>
      <Header />
      <body>
      <NavigationBar />
        <div class="row">
          <div class="side">
            <AboutMe />
            <ContactMe />
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
      <Footer footerText=' Tobias With Thorsen. All rights reserved.'/>
    </div>
  );
}

export default App;