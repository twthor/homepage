import React from 'react';
import './homepage.css';
import CourseList from './components/CourseList';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
    <div>
      <head class="App-header">
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>My Portfolio</title>
        <h1 class="signature">Tobias With Thorsen</h1>
      </head>

      <body>
        <NavigationBar />
        <div class="row">
          <div class="side">
            <h2>About Me</h2>
            <img class="pictures" src={require('./pictures/kroatia2022.jpg')} alt="Kroatia 2022"></img>
            <p>I am studying Cyber Security at Univeristy of Bergen, and is on my last year of the bachelor.
              I am planning to take the master's degree "Informasjonssikkerhet" at University of Oslo.
            </p>
            <h3>Universities:</h3>
            <a href="https://www.uib.no/studier/BAMN-DSIK">Univeristy of Bergen - My bachelor degree</a>
            <p></p>
            <a href="https://www.uio.no/studier/program/informasjonssikkerhet-master/">Univeristy of Oslo - planned master's degree</a>
          </div>
          <div class="main">
            <h2>Projects</h2>
            <div class="fakeimg">Image</div>
            <p>Some text..</p>
            <br></br>
            <h2>Grades</h2>
            <h5>These are my grades and courses from my bachelor's degree.</h5>
            <CourseList />
          </div>
        </div>
      </body>
      <footer class="footer">footer</footer>
    </div>
  );
}

export default App;
