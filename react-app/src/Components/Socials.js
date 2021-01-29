import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import NewsletterForm from './NewsletterForm';

import testImg from "../assets/dog.jpg";


import { ReactComponent as Discord }   from "../assets/icons/discord_alt.svg";
import { ReactComponent as Facebook }  from "../assets/icons/facebook_alt.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram_alt.svg";
import { ReactComponent as Twitter }   from "../assets/icons/twitter_alt.svg";
import { ReactComponent as Youtube }   from "../assets/icons/youtube_alt.svg";
import { ReactComponent as Linkedin }  from "../assets/icons/linkedin_alt.svg";
import { ReactComponent as Steam }     from "../assets/icons/steam_alt.svg";
import { ReactComponent as Twitch }    from "../assets/icons/twitch_alt.svg";
import { ReactComponent as Beepo }     from "../assets/icons/beepo.svg";
import { ReactComponent as Logo}       from "../assets/icons/longhorn_alt.svg";

const cardStyle = {
    height: "200px",
};

const rowStyle = {
    paddingBottom: "20px",
};


function Icon(props) {
    return (
        <a href={props.url} target="_blank" rel="noreferrer">
            {props.icon}
        </a>
    );
}

function Socials() {
    return (
        <Container>
            <h1 style={{marginTop: "163px", marginLeft: "25px", marginBottom: "50px"}}> Welcome to LG's Socials Page!</h1>
            <p1 style={{marginTop: "56px", marginLeft: "27px"}} >stay connected w the coolest</p1>
            <Container style={{marginTop: "25px"}}>
                <Row style={{marginTop: "84px", marginBottom: "64px"}}>
                    <Col>
                        <Icon
                            url="https://www.discord.gg/longhorngaming"
                            icon=<Discord height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://www.twitch.tv/utlonghorngaming"
                            icon=<Twitch height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://www.youtube.com/longhorngaming"
                            icon=<Youtube height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                    <   Icon
                            url="https://www.instagram.com/longhorngaming/"
                            icon=<Instagram height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="http://steamcommunity.com/groups/LonghornGaming"
                            icon=<Steam height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://twitter.com/longhorn_gaming"
                            icon=<Twitter height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://utexas.campuslabs.com/engage/organization/longhorngaming"
                            icon=<Logo height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://www.facebook.com/ut.longhorn.gaming"
                            icon=<Facebook height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://www.linkedin.com/company/longhorn-gaming/"
                            icon=<Linkedin height="55%" width="55%" />
                        />
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <div style={{marginRight: "0px", marginTop: "100px"}}>
                            <ReactPlayer
                                url="https://www.twitch.tv/UTLonghornGaming" width="140%" height="100%" style={{position: "absolute", top:"0", left:"0"}}
                                
                            />
                        </div>
                    </Col>

                    <Col>
                        <div style={{marginLeft: "240px", marginTop: "0px"}}>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="Longhorn_Gaming"
                                options={{ height: 435, width: 482 }}
                                
                            />
                        </div>
                    </Col>
                </Row>

                <br></br>
                <Container>
                    <NewsletterForm></NewsletterForm>
                </Container>
                <br></br>

                <Row style={rowStyle}>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
                <Col><Card>
                        <Card.Img
                            style={cardStyle}
                            variant="top"
                            src={testImg}
                        />
                        <Card.Body>
                            <Card.Title>Hunter</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                President
                            </Card.Subtitle>
                            <Card.Text>
                                Hunter is a senior Archaeology major. His
                                favorite games are fetch and belly rubs.
                            </Card.Text>
                            <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link>
                        </Card.Body>
                    </Card></Col>
            </Row>
            </Container>
        </Container>
    );
}

export default Socials;
