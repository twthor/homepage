import React, { useState } from 'react';
import './homepage.css';
import CourseList from './components/CourseList';
import NavigationBar from './components/NavigationBar';
import Header from 'components/Header';
import Modal from 'components/Modal';
import Footer from 'components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setIsModalOpen(true);
    setModalContent(content);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
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
              I am planning to take the master's degree "Informasjonssikkerhet" at University of Oslo.
            </p>
            <h3>Universities:</h3>
            <a href="https://www.uib.no/studier/BAMN-DSIK">Univeristy of Bergen - My bachelor degree</a>
            <p></p>
            <a href="https://www.uio.no/studier/program/informasjonssikkerhet-master/">Univeristy of Oslo - planned master's degree</a>
          </div>
          <div class="main">
            <h2>Education</h2>
            <h2>Projects</h2>
            <div class="fakeimg">Image</div>
            <p>Some text..</p>
            <br></br>
            <h2>Courses</h2>
            <h4>These are my courses from my bachelor's degree.</h4>
            <CourseList />
          </div>
        </div>
      </body>
    <Footer footerText='Made by Tobias With Thorsen'/>
    </div>
  );
}

export default App;
