import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Blog from './Components/About';
import About from './Components/Blog';
import ESports from './Components/ESports';
import NotFound from './Components/NotFound';
import Home from './Components/Home';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/esports"><ESports /></Route>
        <Route exact path="/blog"><Blog /></Route>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/*"><NotFound /></Route>
      </Switch>

      <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/esports">ESports</Link></li>
      </ul>
  </Router>
  )
}

export default App;
