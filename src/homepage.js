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

/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByvEIBxkc1HqQ_x-bjlkRcFqyo8VJBZ8I",
  authDomain: "homepage-twthor.firebaseapp.com",
  projectId: "homepage-twthor",
  storageBucket: "homepage-twthor.appspot.com",
  messagingSenderId: "856850452766",
  appId: "1:856850452766:web:edd89ff65fe1c7188a790f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
*/