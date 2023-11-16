import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://ahoy.ooo/cleanOy/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the Ahoy WebApp
        </a>
      </header>
      <div className="App-Container">
        This is where the App-Container will go
      </div>
    </div>
  );
}

export default App;
