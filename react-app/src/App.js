import React  from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from 'react-bootstrap/Navbar';
import Nav    from 'react-bootstrap/Nav';

import Blog     from './Components/Blog';
import About    from './Components/About';
import ESports from './Components/ESports';
import Events from './Components/Events';
import NotFound from './Components/NotFound';
import Home     from './Components/Home';

import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './assets/LGWhiteLogo.png';

function App() {
  return (

    <Router>

      <NavBar bg='dark' variant='dark'>
        <NavBar.Brand> <img src={logo} alt="LG Logo" width="35" height="30"/> </NavBar.Brand>
        <Nav>
          <Nav.Link href='about'>About</Nav.Link>
          <Nav.Link href='blog'>Blog</Nav.Link>
          <Nav.Link href='eSports'>eSports</Nav.Link>
          <Nav.Link href='events'>Events</Nav.Link>        
        </Nav>
      </NavBar>

      <Switch>
        <Route exact path="/about"><About /></Route>
        <Route exact path="/esports"><ESports /></Route>
        <Route exact path="/blog"><Blog /></Route>
        <Route exact path="/events"><Events /></Route>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/*"><NotFound /></Route>
      </Switch>

  </Router>
  )
}

export default App;
