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
import URLs from 'components/URLs';

function App() {
  
  return (
    <div className='body'>
      <Header />
      <NavigationBar />
      <URLs></URLs>
      <AboutMe />
        <div class="displayWindows">
          <ProjectWindow />
          <br></br>
          <WorkExperienceWindow />
          <br></br>
          <EducationWindow /> 
          <br></br>
          <CourseWindow />
        </div>
      <ContactMe />
      <Footer footerText=' Tobias With Thorsen. All rights reserved.'/>
    </div>
  );
}

export default App;