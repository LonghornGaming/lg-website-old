import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player";
import { TwitterTimelineEmbed } from "react-twitter-embed";

import { ReactComponent as Discord }   from "../assets/icons/discord.svg";
import { ReactComponent as Facebook }  from "../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../assets/icons/instagram.svg";
import { ReactComponent as Twitter }   from "../assets/icons/twitter.svg";
import { ReactComponent as Youtube }   from "../assets/icons/youtube.svg";

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
            <h1>Welcome to LG's Socials Page!</h1>
            <Container>
                <Row>
                    <Col>
                        <Icon
                            url="https://www.discord.gg/longhorngaming"
                            icon=<Discord height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://www.facebook.com/ut.longhorn.gaming"
                            icon=<Facebook height="55%" width="55%" />
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
                            url="https://twitter.com/longhorn_gaming"
                            icon=<Twitter height="55%" width="55%" />
                        />
                    </Col>
                    <Col>
                        <Icon
                            url="https://www.youtube.com/longhorngaming"
                            icon=<Youtube height="55%" width="55%" />
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <ReactPlayer
                                url="https://www.twitch.tv/UTLonghornGaming"
                                controls
                            />
                        </div>
                    </Col>

                    <Col>
                        <div>
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="Longhorn_Gaming"
                                options={{ height: 600, width: 300 }}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default Socials;
