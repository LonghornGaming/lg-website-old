import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Calendar from '@ericz1803/react-google-calendar';

import {Container, Row, Col, Button, Card} from "react-bootstrap";
import images from "../assets/images.js";
import NewsletterForm from './NewsletterForm';
import ReactPlayer from "react-player";
import {TwitterTimelineEmbed} from "react-twitter-embed";

const { calKey, calID } = require('../keys.js');
const styles = {
    p: {
        fontSize: "50px"
    },
    paddingTop:    '200px',
    paddingBottom: '200px',
    borderRadius: '0px',
    backgroundImage:    'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(' + images.utlandscape + ')',
    backgroundPosition: 'center center',
    backgroundRepeat:   'no-repeat',
    backgroundSize:     'cover',
    color: 'white'
};

function Home() {
    return (

        <div>
            <Jumbotron style={styles}>
                <Container style={{marginLeft:250}}>
                    <h1>Welcome to Longhorn Gaming</h1>
                    <p>
                        The central hub for casual and competitive gaming at the University of Texas at Austin.
                    </p>
                    <Button variant="dark" style={{backgroundColor:"#CF6D3C"}} href={"https://discord.com/invite/longhorngaming"}>Connect</Button>
                </Container>
            </Jumbotron>

            <Container fluid style={{paddingLeft:75, paddingRight:75}}>
                <Container>
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
            </Container>

            <br></br>

            <Container fluid style={{color: 'white',backgroundColor: '#202426', margin:0, padding:50}}>
                <Container>
                    <Row className="justify-content-md-center" >
                        <Col>
                            <Card style={{backgroundColor:"#000000", border:0}}>
                                <Card.Img style={{borderRadius: '0px'}} src={images.home1}/>
                                <Card.Body>
                                    <Card.Title><a style={{color:'white'}} href={'events'}>Community Events</a></Card.Title>
                                    <Card.Text>
                                        Interested in tournaments, LAN parties, casual events, and more?
                                        Check out our list of events here!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor:"#000000", border:0}}>
                                <Card.Img style={{borderRadius: '0px'}} src={images.home2}/>
                                <Card.Body>
                                    <Card.Title><a style={{color:'white'}} href={"eSports"}>Competitive Teams</a></Card.Title>
                                    <Card.Text>
                                        Show the world what you and LG are made of by competing
                                        in tournaments for whatever game you want.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor:"#000000", border:0}}>
                                <Card.Img style={{borderRadius: '0px'}} src={images.home3}/>
                                <Card.Body>
                                    <Card.Title><a style={{color:'white'}} href={"https://linktr.ee/longhorngaming"}>Learn More</a></Card.Title>
                                    <Card.Text>
                                        Connect with us on our social media and join our community on Hornslink
                                        by clicking the button below!
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

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