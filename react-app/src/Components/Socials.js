import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import ReactPlayer from "react-player"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';

import discord   from "../assets/icons/discord.svg";
import facebook  from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";
import twitter   from "../assets/icons/twitter.svg";
import youtube   from "../assets/icons/youtube.svg";

function Socials() {
    return (
        <Container>
            <h1>Welcome to LG's Socials Page!</h1>
            <Container>
                <Row>
                    <Col><img src={discord}   alt="Instagram Logo" height="50%" width="50%"/></Col>
                    <Col><img src={facebook}  alt="Instagram Logo" height="50%" width="50%"/></Col>
                    <Col><img src={instagram} alt="Instagram Logo" height="50%" width="50%"/></Col>
                    <Col><img src={twitter}   alt="Instagram Logo" height="50%" width="50%"/></Col>
                    <Col><img src={youtube}   alt="Instagram Logo" height="50%" width="50%"/></Col>
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
                        options={{height: 600, width: 300}}
                    />
                    </div>
                    </Col>

                </Row>
            </Container>
        </Container>
    )
}

export default Socials;