import React from 'react';
import ReactPlayer from "react-player"
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import { Container, Row, Col } from "react-bootstrap";

function Socials() {
    return (
        <body>
            <h1>Welcome to LG's Socials Page!</h1>
            <Container>
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
            

        </body>
    )
}

export default Socials;
