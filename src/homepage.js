import './homepage.css';

function App() {
  return (
    <div>
      <head class="App-header">
        <meta charset="UTF-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>My Portfolio</title>
        <h1>My Portfolio</h1>
        <p class="signature">Tobias With Thorsen</p>
      </head>

      <body>
        <div class="navigationBar">
          <a href="http://localhost:3000">Home</a>
          <a href="https://github.com/twthor?tab=repositories">GitHub repositories</a>
        </div>
        <div class="row">
          <div class="side">
            <h2>About Me</h2>
            <img class="pictures" src={require('./pictures/kroatia2022.jpg')} alt="Kroatia 2022"></img>
            <p>I am studying Cyber Security at Univeristy of Bergen, and am at the end of my second year.
              I am planning to study one semester abroad at Charles Univeristy in Praha, Czech republic.
            </p>
            <h3>More Text</h3>
            <a href="https://www.uib.no/">Univeristy of Bergen</a>
            <p></p>
            <a href="https://cuni.cz/UKEN-1.html">Charles Univeristy</a>
          </div>
          <div class="main">
            <h2>TITLE HEADING</h2>
            <div class="fakeimg">Image</div>
            <p>Some text..</p>
            <br></br>
            <h2>Grades</h2>
            <h5>These are my grades and courses from my bachelor's degree.</h5>
            <table>
              <tr>
                <th>Course code</th>
                <th>Course name</th>
                <th>Grade</th>
              </tr>
              <tr>
                <th>INF100</th>
                <th>Introduction to programming, Python.</th>
                <th>A</th>
              </tr>
              <tr>
                <th>INF140</th>
                <th>Introduction to Cyber Security</th>
                <th>A</th>
              </tr>
              <tr>
                <th>MAT101</th>
                <th>Basic course in Maths</th>
                <th>Passed (no grade because of Covid)</th>
              </tr>
              <tr>
                <th>INF101</th>
                <th>Object oriented programming</th>
                <th>A</th>
              </tr>
              <tr>
                <th>INF142</th>
                <th>Computer networks</th>
                <th>A</th>
              </tr>
              <tr>
                <th>MNF130</th>
                <th>Discrete structures</th>
                <th>C</th>
              </tr>
              <tr>
                <th>INF102</th>
                <th>Algorithms, datastructures and programming</th>
                <th>B</th>
              </tr>
              <tr>
                <th>INF113</th>
                <th>Introduction to operating systems</th>
                <th>A</th>
              </tr>
              <tr>
                <th>STAT110</th>
                <th>Basic course in statistics</th>
                <th>C</th>
              </tr>
              <tr>
                <th>INF115</th>
                <th>Databases and modelling</th>
                <th>Ongoing..</th>
              </tr>
              <tr>
                <th>INF143A</th>
                <th>Applied Cryptography</th>
                <th>Ongoing</th>
              </tr>
              <tr>
                <th>MAT121</th>
                <th>Linear Algebra</th>
                <th>Ongoing..</th>
              </tr>
              <tr>
                <th>INF214</th>
                <th>Concurrent programming</th>
                <th>Fall 2023</th>
              </tr>
              <tr>
                <th>INF226</th>
                <th>Software Security</th>
                <th>Fall 2023</th>
              </tr>
              <tr>
                <th>EXPHIL-HFEKS</th>
                <th>Examen philosophicum</th>
                <th>Fall 2023</th>
              </tr>
              <tr>
                <th>??</th>
                <th>..</th>
                <th>Spring 2024</th>
              </tr>
              <tr>
                <th>??</th>
                <th>..</th>
                <th>Spring 2024</th>
              </tr>
              <tr>
                <th>??</th>
                <th>..</th>
                <th>Spring 2024</th>
              </tr>
            </table>
          </div>
        </div>
      </body>
      <footer class="footer">footer</footer>
    </div>
  );
}

export default App;
