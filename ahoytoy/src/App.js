import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NowPlaying from './components/NowPlaying';
import Radio from './components/Radio';
import Artists from './components/Artists';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/now-playing">Now Playing</Link>
            </li>
            <li>
              <Link to="/radio">Radio</Link>
            </li>
            <li>
              <Link to="/artists">Artists</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/now-playing">
            <NowPlaying />
          </Route>
          <Route path="/radio">
            <Radio />
          </Route>
          <Route path="/artists">
            <Artists />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home Page</h2>; // Simple home component for demonstration
}

export default App;
