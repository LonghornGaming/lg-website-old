import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import ut_image from '../assets/ut.jpg';

import Calendar from '@ericz1803/react-google-calendar';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Home1 from "../assets/home1.jpg";
import Home2 from "../assets/home2.jpg";
import Home3 from "../assets/home3.jpg";

const { calKey, calID } = require('../keys.js');
const styles = {
    paddingTop:    '200px',
    paddingBottom: '200px',

    backgroundImage:    'url(' + ut_image + ')',
    backgroundPosition: 'center center',
    backgroundRepeat:   'no-repeat',
    backgroundSize:     'cover',
};

function Home() {
    return (
        <div>
            <Jumbotron style={styles}>
                <h1>Welcome to Longhorn Gaming</h1>
                <p>
                    The central hub for casual and competitive gaming at the University of Texas at Austin.
                </p>
            </Jumbotron>
            <h2>Get Involved</h2>
            <p>There are so many ways to get involved with LG! Check out how below:</p>
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <Image src={Home1} width="100%" min-height="185" rounded/>
                        <h3>Community Events</h3>
                        <p type="text">
                            Interested in tournaments, LAN parties, casual events, and more?
                            Check out our list of events here!
                        </p>    
                    </Col>
                    <Col>
                        <img src={Home2}  width="100%" min-height="185" rounded/>
                        <h3>Competitive Teams</h3>
                        <p type="text">
                            Show the world what you and LG are made of by competing
                            in tournaments for whatever game you want.
                        </p>  
                    </Col>
                    <Col>
                        <img src={Home3}  width="100%" min-height="185" rounded/>
                        <h3>Learn More</h3>
                        <p type="text">
                            Connect with us on our social media and join our community on Hornslink
                            by clicking the button below!
                        </p>  
                    </Col>
                </Row>
            </Container>

            <h2>Upcoming Events</h2>
            <Calendar apiKey={calKey} calendarId={calID} />

        </div>
    )
}

export default Home;