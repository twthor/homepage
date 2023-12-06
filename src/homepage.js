import React from 'react';
import './styles/homepage.css';
import EducationWindow from 'components/EducationWindow';
import CourseWindow from 'components/CourseWindow';
import ProjectWindow from 'components/ProjectWindow';
import NavigationBar from './components/NavigationBar';
import Header from 'components/Header';
import Footer from 'components/Footer';

function App() {
  
  return (
    <div>
      <Header />

      <body>
        <NavigationBar />
        <div class="row">
          <div class="side">
            <h2 align="center">About Me</h2>
            <img class="profilepicture" src={require('./pictures/kroatia2022.jpg')} alt="Kroatia 2022"></img>
            <p class="textbox">I am studying Cyber Security at Univeristy of Bergen, and is on my last year of the bachelor.
              I am planning to take the master's degree "Informatikk: Informasjonssikkerhet" at University of Oslo.
            </p>
            <h3>Universities:</h3>
            <a href="https://www.uib.no/studier/BAMN-DSIK">Univeristy of Bergen - My bachelor degree</a>
            <p></p>
            <a href="https://www.uio.no/studier/program/informasjonssikkerhet-master/">Univeristy of Oslo - planned master's degree</a>
          </div>
          <div class="main">
            <div class="displayWindows">
              <ProjectWindow />
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
