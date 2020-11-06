import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Calendar from '@ericz1803/react-google-calendar';

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import images from "../assets/images.js";

const { calKey, calID } = require('../keys.js');
const styles = {
    paddingTop:    '200px',
    paddingBottom: '200px',

    backgroundImage:    'url(' + images.utlandscape + ')',
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
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <Image src={images.home1} width="100%" min-height="185" rounded/>
                        <h3>Community Events</h3>
                        <p type="text">
                            Interested in tournaments, LAN parties, casual events, and more?
                            Check out our list of events here!
                        </p>
                        <Button href="events" variant="dark">View Events List</Button>
                    </Col>
                    <Col>
                        <img src={images.home2}  width="100%" min-height="185" rounded/>
                        <h3>Competitive Teams</h3>
                        <p type="text">
                            Show the world what you and LG are made of by competing
                            in tournaments for whatever game you want.
                        </p>
                        <Button href="eSports" variant="dark">Learn About eSports</Button>  
                    </Col>
                    <Col>
                        <img src={images.home3}  width="100%" min-height="185" rounded/>
                        <h3>Learn More</h3>
                        <p type="text">
                            Connect with us on our social media and join our community on Hornslink
                            by clicking the button below!
                        </p>
                        <Button href="https://linktr.ee/longhorngaming" variant="dark">Visit Our linktr.ee</Button>  
                    </Col>
                </Row>
            </Container>
            <br></br>
            <Container fluid>
                <Row className="justify-content-md-center">
                    <Col xs={8}>
                        <Calendar apiKey={calKey} calendarId={calID} />
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default Home;