import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Calendar from '@ericz1803/react-google-calendar';

import { Image, Container, Row, Col, Button, Grid} from "react-bootstrap";
import images from "../assets/images.js";
import NewsletterForm from './NewsletterForm';
import ReactPlayer from "react-player";
import {TwitterTimelineEmbed} from "react-twitter-embed";

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

            <Container fluid style={{paddingLeft:75, paddingRight:75}}>
                <Row>
                    <Col xs={9} style={{height:500}}>
                        <div>
                            <ReactPlayer
                                url="https://www.twitch.tv/UTLonghornGaming" width="100%" height="100%" style={{position: "absolute", top:"0", left:"0"}}

                            />
                        </div>
                    </Col>

                    <Col xs={3}>
                        <div>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="Longhorn_Gaming"
                                options={{ height: 500, width: 500 }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>

            <br></br>

            <Container fluid style={{color: 'white',backgroundColor: '#202426', margin:0, padding:50, height: 768}}>
                <Row className="justify-content-md-center" >
                    <Col>
                        <Image src={images.home1} width="100%" min-height="185" rounded/>
                        <h3><a style={{color:'white'}} href={'events'}>Community Events</a></h3>
                        <p type="text">
                            Interested in tournaments, LAN parties, casual events, and more?
                            Check out our list of events here!
                        </p>
                    </Col>
                    <Col>
                        <img src={images.home2}  width="100%" min-height="185" rounded/>
                        <h3><a style={{color:'white'}} href={"eSports"}>Competitive Teams</a></h3>
                        <p type="text">
                            Show the world what you and LG are made of by competing
                            in tournaments for whatever game you want.
                        </p>
                    </Col>
                    <Col>
                        <img src={images.home3}  width="100%" min-height="185" rounded/>
                        <h3><a style={{color:'white'}} href={"https://linktr.ee/longhorngaming"}>Learn More</a></h3>
                        <p type="text">
                            Connect with us on our social media and join our community on Hornslink
                            by clicking the button below!
                        </p>
                    </Col>
                </Row>
            </Container>

            <br></br>

            <Container>
                <NewsletterForm></NewsletterForm>
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