import React, {useState} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import Blogs from "./Components/Blogs";
import About from "./Components/About";
import ESports from "./Components/ESports";
import Events from "./Components/Events";
import NotFound from "./Components/NotFound";
import Home from "./Components/Home";
import Socials from "./Components/Socials";
import Blog from "./Components/Blog";
import ESportsPage from "./Components/ESportsPage";
import Communities from "./Components/Communities";

import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/LGWhiteLogo.png";

import Footer from "./Components/Footer";
import CommunityPage from "./Components/CommunityPage";
import MegaMenu from "./Components/MegaMenu"


function HoverControlledDropdown(props) {
    const [isHovered, setIsHovered] = useState(false);
    // const [isClicked, setIsClicked] = useState(false);

    return (
        <NavDropdown
            {...props}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            show={isHovered}
        />
    );
}

function App() {
    return (
        <Router>
            <NavBar bg="dark" variant="dark">
                <NavBar.Brand>
                    {" "}
                    <img src={logo} alt="LG Logo" width="35" height="30" />{" "}
                </NavBar.Brand>
                <Nav>
                    <Nav.Link href="home">Home</Nav.Link>
                    <Nav.Link href="about">About</Nav.Link>
                    <HoverControlledDropdown title="Games">
                        <NavDropdown.Item href="eSports">
                            eSports
                        </NavDropdown.Item>
                        <NavDropdown.Item href="communities">
                            Communities
                        </NavDropdown.Item>
                    </HoverControlledDropdown>
                    <Nav.Link href="blogs">Blogs</Nav.Link>
                    <Nav.Link href="socials">Socials</Nav.Link>
                    <Nav.Link
                        href="https://discord.com/invite/longhorngaming"
                        target="_blank"
                    >
                        Join Our Discord
                    </Nav.Link>
                </Nav>
            </NavBar>

            <MegaMenu/>

            <Switch>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/esports">
                    <ESports />
                </Route>
                <Route exact path="/communities">
                    <Communities />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path="/blogs">
                    <Blogs />
                </Route>
                <Route exact path="/socials">
                    <Socials />
                </Route>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/404">
                    <NotFound />
                </Route>
                <Route exact path="/blog/">
                    <Blog />
                </Route>
                <Route exact path="/esport">
                    <ESportsPage />
                </Route>
                <Route exact path="/community">
                    <CommunityPage/>
                </Route>
                <Redirect to="/404"></Redirect>
            </Switch>

            <Footer />
        </Router>
    );
}

export default App;
