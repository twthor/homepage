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
          <a href="https://google.com">Home</a>
          <a href="https://github.com/twthor?tab=repositories">GitHub repositories</a>
        </div>
        <div class="row">
          <div class="side">
            <h2>About Me</h2>
            <img class="pictures" src={require('./pictures/kroatia2022.jpg')} alt="Kroatia 2022"></img>
            <p>Some text about me</p>
            <h3>More Text</h3>
            <div class="fakeimg">Image</div><br></br>
            <div class="fakeimg">Image</div><br></br>
            <div class="fakeimg">Image</div>
          </div>
          <div class="main">
            <h2>TITLE HEADING</h2>
            <div class="fakeimg">Image</div>
            <p>Some text..</p>
            <br></br>
            <h2>TITLE HEADING</h2>
            <h5>Title description, Sep 2, 2017</h5>
            <div class="fakeimg">Image</div>
            <p>Some text..</p>
          </div>
        </div>
      </body>
      <footer class="footer">footer</footer>
    </div>
  );
}

export default App;
